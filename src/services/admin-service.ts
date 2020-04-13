import {UserService} from '@loopback/authentication';
import {inject} from '@loopback/context';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import {PasswordHasherBindings} from '../keys';
import {Admin} from '../models/admin.model';
import {AdminRepository, Credentials} from '../repositories/admin.repository';
import {PasswordHasher} from './hash.password.bcryptjs';

export class AdminService implements UserService<Admin, Credentials> {
  constructor(
    @repository(AdminRepository) public adminRepository: AdminRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) {}

  async verifyCredentials(credentials: Credentials): Promise<Admin> {
    const foundUser = await this.adminRepository.findOne({
      where: {email: credentials.email},
    });

    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `User with email ${credentials.email} not found.`,
      );
    }
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('The credentials are not correct.');
    }

    return foundUser;
  }

  convertToUserProfile(user: Admin): UserProfile {
    // since first name and lastName are optional, no error is thrown if not provided
    const userProfile = {
      [securityId]: user.id.toString(),
      name: user.name,
      id: user.id,
    };

    return userProfile
  }
}
