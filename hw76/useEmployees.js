const mongoose = require('mongoose'),
    Employee = require('./employee'),
    Department = require('./department');

mongoose.connect('mongodb://127.0.0.1:27017/company');

mongoose.connection.on('error', err => {
    console.error(err);
});

mongoose.connection.on('open', () => {
    console.log('connected');

    const donald = new Employee({
        name: {
            first: 'Donald',
            last: 'Trump'
        },
        salary: '120000'
    });
    const bernie = new Employee({
        name: {
            first: 'Bernie Seltzer',
            last: 'Sanders'
        },
        salary: '45000'
    });
    const me = new Employee({
        name: {
            first: 'Yehoshua',
            last: 'Piotrkovski'
        },
        salary: '2,500,000 plus bonus'
    });

    donald.save((err, result) => {
        const sales = new Department({
            name: 'Amazon'
        });


        sales.employees.push(donald);


        bernie.save((err, result) => {

            bookkeeping = new Department({
                name: 'Bookkeeping'
            });

            bookkeeping.employees.push(bernie);

        });

        me.save((err, result) => {
            owner = new Department({
                name: 'Owner'
            });

            owner.employees.push(me);

            sales.save((err, res) => {
                bookkeeping.save((e, r) => {
                    owner.save((e, r) => {
                        Department.find().populate('employees').exec((err, lists) => {
                            lists.forEach(list => {
                                list.print();
                            });
                        });
                    });
                });
            });
        });

    });
});