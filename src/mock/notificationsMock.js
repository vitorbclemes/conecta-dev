import moment from 'moment'
import mock from '../utils/mock'

mock.onGet('/api/notifications').reply(200, {
    notifications: [
        {
            id: '5e883f1b',
            title: 'Novas avaliacoes recebidas',
            description: 'Voce recebeu 1 nova avaliacao',
            type: 'reviews',
            createdAt: moment()
                .subtract(2, 'hours')
                .toDate()
                .getTime()
        },
        {
            id: '5e883fb7e',
            title: 'Novos comentarios recebidos',
            description: 'Voce recebeu 1 novo comentario',
            type: 'new_comment',
            createdAt: moment()
                .subtract(1, 'day')
                .toDate()
                .getTime()
        },
        {
            id: '5e883fca0',
            title: 'Novos likes recebidos',
            description: 'Voce recebeu 1 novo like',
            type: 'like',
            createdAt: moment()
                .subtract(3, 'days')
                .toDate()
                .getTime()
        },
        {
            id: '5e883fca7',
            title: 'Novos seguidores',
            description: '2 devs comecaram a seguir voce',
            type: 'connection',
            createdAt: moment()
                .subtract(3, 'days')
                .toDate()
                .getTime()
        }
    ]
})