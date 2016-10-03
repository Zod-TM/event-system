import { register } from 'backendServices';
import { everlive } from 'everliveSetup';
import { requester } from 'requester';

mocha.setup('bdd');
const { expect } = chai;

describe('Test register(user)', () => {
    let user = {
        username: 'username',
        password: 'top-secret',
        firstName: 'FirstName',
        secondName: 'SecondName'
    }

    beforeEach(() => {
        sinon.stub(requester, 'post', () => {
            return Promise.resolve();
        });

        let data = {
            result: {
                Id: '1234'
            }
        }
        sinon.stub(everlive.Users, 'register', () => {
            return Promise.resolve(data);
        });
    });

    afterEach(() => {
        everlive.Users.register.restore();
        requester.post.restore();
    })


    it('expects register to be a function', () => {
        expect(register).to.be.a('function');
    });

    it('expects register to be called with correct username argument', (done) => {
        register(user)
            .then(() => {
                const actual = everlive.Users.register
                    .firstCall
                    .args[0];

                expect(actual).to.equal('username');
            })
            .then(done, done);
    });

    it('expects register to be called with correct password argument', (done) => {
        register(user)
            .then(() => {
                const actual = everlive.Users.register
                    .firstCall
                    .args[1];

                expect(actual).to.equal('top-secret');
            })
            .then(done, done);
    });

    it('expects register to be called with correct attrs object argument', (done) => {
        register(user)
            .then(() => {
                const actual = everlive.Users.register
                    .firstCall
                    .args[2];

                const displayName = `${user.firstName} ${user.secondName}`,
                    expected = {
                        DisplayName: displayName
                    };
                expect(actual).to.eql(expected);
            })
            .then(done, done);
    });
});

mocha.run();