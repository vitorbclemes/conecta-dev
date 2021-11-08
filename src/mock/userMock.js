import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'username': 'vitorbclemes',
        'email': 'vitorbc.oficial@gmail.com',
        avatar: '/images/avatares/avatar_1.png'
    }
})

mock.onPost('/api/home/login').reply((config) => {
    const { email, password } = JSON.parse(config.data)
    if (email !== 'vitorbc.oficial@gmail.com' || password !== 'admin')
        return [400, { message: 'Seu e-mail ou senha estao incorretos' }]

    const user = {
        id: 1,
        name: 'Vitor Clemes',
        username: 'vitorbclemes',
        email: 'vitorbc.oficial@gmail.com',
        avatar: '/images/avatares/avatar_1.png'
    }
    return [200, { user }]
})