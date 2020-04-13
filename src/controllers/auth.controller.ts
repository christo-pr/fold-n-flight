import {authenticate, TokenService} from '@loopback/authentication';
import {inject} from '@loopback/context';
import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, param, patch, post, put, requestBody} from '@loopback/rest';
import {PasswordHasherBindings, TokenServiceBindings, UserServiceBindings} from '../keys';
import {Admin} from '../models';
import {AdminRepository, Credentials} from '../repositories';
import {AdminService} from '../services/admin-service';
import {PasswordHasher} from '../services/hash.password.bcryptjs';

export class AuthController {
  constructor(
    @repository(AdminRepository)
    public adminRepository: AdminRepository,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: AdminService,
  ) {}

  @post('/admin', {
    responses: {
      '200': {
        description: 'Admin model instance',
        content: {'application/json': {schema: getModelSchemaRef(Admin)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {
            title: 'NewAdmin',
            exclude: ['id'],
          }),
        },
      },
    })
    admin: Admin,
  ): Promise<Admin> {

    // encrypt the password
    admin.password = await this.passwordHasher.hashPassword(
      admin.password,
    );

    try {
      // create the new user
      const savedAmin = await this.adminRepository.create(admin);

      return savedAmin;
    } catch (error) {
      throw error
    }
  }

  @post('/admin/login', {
    responses: {
      '200': {
        description: 'Authorization token',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string'
                },
              },
            },
          },
        },
      },
    },
  })
  async login(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(Admin, {
          title: 'LoginAdmin',
          exclude: ['id', 'name'],
        }),
      },
    },
  }) credentials: Credentials): Promise<{token: string}> {
    // ensure the user exists, and the password is correct
    const user = await this.userService.verifyCredentials(credentials);

    // convert a User object into a UserProfile object (reduced set of properties)
    const userProfile = this.userService.convertToUserProfile(user);

    // create a JSON Web Token based on the user profile
    const token = await this.jwtService.generateToken(userProfile);

    return {token};
  }

  @get('/admin/count', {
    responses: {
      '200': {
        description: 'Admin model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Admin) where?: Where<Admin>,
  ): Promise<Count> {
    return this.adminRepository.count(where);
  }

  @get('/admin', {
    responses: {
      '200': {
        description: 'Array of Admin model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Admin, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  @authenticate('jwt')
  async find(
    @param.filter(Admin) filter?: Filter<Admin>,
  ): Promise<Admin[]> {
    return this.adminRepository.find(filter);
  }

  @patch('/admin', {
    responses: {
      '200': {
        description: 'Admin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {partial: true}),
        },
      },
    })
    admin: Admin,
    @param.where(Admin) where?: Where<Admin>,
  ): Promise<Count> {
    return this.adminRepository.updateAll(admin, where);
  }

  @get('/admin/{id}', {
    responses: {
      '200': {
        description: 'Admin model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Admin, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Admin, {exclude: 'where'}) filter?: FilterExcludingWhere<Admin>
  ): Promise<Admin> {
    return this.adminRepository.findById(id, filter);
  }

  @patch('/admin/{id}', {
    responses: {
      '204': {
        description: 'Admin PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Admin, {partial: true}),
        },
      },
    })
    admin: Admin,
  ): Promise<void> {
    await this.adminRepository.updateById(id, admin);
  }

  @put('/admin/{id}', {
    responses: {
      '204': {
        description: 'Admin PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() admin: Admin,
  ): Promise<void> {
    await this.adminRepository.replaceById(id, admin);
  }

  @del('/admin/{id}', {
    responses: {
      '204': {
        description: 'Admin DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.adminRepository.deleteById(id);
  }
}
