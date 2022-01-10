import capitalize from '../codes/capitalize';

test ('SeBaStIan to be Sebastian', () => {
    expect(capitalize('SeBaStIaN')).toBe('Sebastian')
});

test(" '' to be '' ", () => {
    expect(capitalize('')).toBe('')
});

test('SEBASTIAN to be Sebastian', () => {
    expect(capitalize('SEBASTIAN')).toBe('Sebastian')
});

test('sebastian to be Sebastian', () => {
    expect(capitalize('sebastian')).toBe('Sebastian')
});