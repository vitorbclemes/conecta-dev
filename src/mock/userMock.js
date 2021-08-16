import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//     'id': 1,
//     'username': 'vitorbclemes',
//     'email': 'vitorbc.oficial@gmail.com'
// })

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)
    if (email !== 'vitorbc.oficial@gmail.com' || password !== 'admin')
        return [400, { message: 'Seu e-mail ou senha estao incorretos' }]

    const user = {
        id: 1,
        name: 'Vitor Clemes',
        username: 'vitorbclemes',
        email: 'vitorbc.oficial@gmail.com'
    }
    return [200, { user }]
})