module.exports = function () {
    const faker = require("faker");
    faker.locale = "id_ID";

    const _ = require("lodash");

    return{
        order: _.times(50, function () {
            return {
                uid: faker.random.uuid(),
                code: faker.random.alphaNumeric(10),
                status: faker.random.arrayElement(['waiting', 'scheduled', 'processing', 'sending', 'done']),
                payment: faker.random.arrayElement(['dp', 'payed']),
                paymentTotal: faker.finance.amount(100000, 5000000, 0),
                item: {
                    name: faker.commerce.product(),
                    description: faker.lorem.sentences(),
                    menus: _.times(10, function (n) {
                        return {
                            id: n,
                            quantity: faker.random.number({min: 5, max: 50}),
                            total: faker.finance.amount(100000, 200000,0),
                            menu: {
                                name: faker.commerce.productName(),
                                description: faker.lorem.sentences(),
                                minimalOrder: faker.random.number({min:5, max:100}),
                                price: faker.finance.amount(10000, 50000, 0),
                                images: _.times(3, function (n) {
                                    return {
                                        id: n,
                                        imageUrl: faker.image.food()
                                    }
                                }),
                                isPublished: faker.random.boolean()
                            }
                        }
                    })
                },
                note: faker.lorem.sentences(3,3),
                location: {
                    address: faker.address.streetAddress(),
                    latitude: faker.address.latitude(),
                    longitude: faker.address.longitude()
                },
                issuedAt: faker.date.between('2020-02-01', '2020-03-31'),
                deliverAt: faker.date.between('2020-04-01', '2020-05-31'),
                customer: {
avatar: faker.image.avatar(),
                    name: faker.name.findName(),
email: faker.internet.email(),
                    phoneNumber: faker.phone.phoneNumber(),
                    whatsAppNumber: faker.phone.phoneNumber(),
                    address: faker.address.streetAddress()
                }
            }
        }),
        catering: {
            uid: faker.random.uuid(),
            name: faker.company.companyName(0),
            dpPercentage: faker.finance.amount(0, 1, 2),
            accountNumber:faker.finance.account(),
            user: {
                uid: faker.random.uuid(),
                name: faker.name.findName(),
                phoneNumber: faker.phone.phoneNumber(),
                whatsAppNumber: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                imageUrl: faker.image.avatar(),
                isPremiumMembership: faker.random.boolean()
            },
            province: faker.address.county(),
            district: faker.address.state(),
            subDistrict: faker.address.city(),
            fullAddress: faker.address.streetAddress("###")
        },
        user: {
            uid: faker.random.uuid(),
            name: faker.name.findName(),
            phoneNumber: faker.phone.phoneNumber(),
            whatsAppNumber: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            imageUrl: faker.image.avatar(),
            isPremiumMembership: faker.random.boolean()
        },
        menu: _.times(100, function () {
            return {
                name: faker.commerce.productName(),
                description: faker.lorem.sentences(),
                minimalOrder: faker.random.number({min:5, max:100}),
                price: faker.finance.amount(10000, 50000, 0),
                images: _.times(3, function (n) {
                    return {
                        id: n,
                        imageUrl: faker.image.food()
                    }
                }),
                isPublished: faker.random.boolean()
            }
        }),
        packageMenu: _.times(100, function () {
            return {
                name: faker.commerce.product(),
                minimalOrder: faker.random.number({min:5, max:100}),
                menus: _.times(20, function () {
                    return {
                        name: faker.commerce.productName(),
                        description: faker.lorem.sentences(),
                        minimalOrder: faker.random.number({min:5, max:100}),
                        price: faker.finance.amount(10000, 50000, 0),
                        images: _.times(3, function (n) {
                            return {
                                id: n,
                                imageUrl: faker.image.food()
                            }
                        }),
                        isPublished: true
                    }
                }),
		            price: faker.finance.amount(100000, 500000, 0),
                type: faker.random.arrayElement(['prasmanan', 'piring terbang', 'paket box']),
            }
        }),
        packageMenuType: [
            {
                id: 0,
                name: 'Prasmanan'
            },
            {
                id: 1,
                name: 'Piring Terbang'
            },
            {
                id: 2,
                name: 'Paket Box'
            }
        ],
        cart:[],
        review: _.times(50, function(){
          return {
            name: faker.name.findName(),
            avatar: faker.internet.avatar(),
            rating: faker.finance.amount(4, 5,2),
            postedAt: faker.date.between('2020-02-01', '2020-03-31'),
            comment: faker.lorem.sentences()
          };
        }),
    }
}
