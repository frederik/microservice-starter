import { expect, should } from 'chai';

import { demo } from './demo';

describe('Demo', () => {
    it('renders string Demo', () => {
        demo(undefined, {
            status: () => ({
                send: (result) => {
                    expect(result).to.equal('Demo');
                }
            })
        });
    });
});