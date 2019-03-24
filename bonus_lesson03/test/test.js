//let assert = require('chai').assert;
describe('sum', function(){
	it('Функция возвращает тип данных true', function(){
		assert.typeOf(sum(2, 2), 'boolean');
	});
});

//
describe('num', function(){
	it('Переменная num равна 5', function(){
		assert.equal(num, 5);
	});
});

//
describe('each', function(){
	it('Возвращает ип данных array', function(){
		assert.typeOf(each(arr1, myFunc), 'array')
	});
	it('Возвращает [1,4]', function() {
		assert.deepEqual(each(arr1, myFunc), [8, 7, 6, 5, 4])
	});
	it('Длина равна 2', function() {
		assert.lengthOf(each(arr1, myFunc), 5);
	});
});

