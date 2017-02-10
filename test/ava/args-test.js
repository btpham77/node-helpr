import test from 'ava'
import _ from 'lodash'
import {setArgDefault, getArg, clearArgDefault, clearArgDefaults, getJsonArg} from '../../src'

test('setArgDefault', t => {
  const key = 'foo'
  let foo = getArg(key)
  t.falsy(foo)
  setArgDefault({key, value: 'bar'})
  foo = getArg(key)
  t.is(foo, 'bar')
  clearArgDefault(key)
  foo = getArg(key)
  t.falsy(foo)
})

test('clearArgDefaults', t => {
  const key = 'foo'
  let foo = getArg(key)
  t.falsy(foo)
  setArgDefault({key, value: 'bar'})
  foo = getArg(key)
  t.is(foo, 'bar')
  clearArgDefaults()
  foo = getArg(key)
  t.falsy(foo)
})

test('getJsonArg', t => {
  const key = 'foo'
  let foo = getJsonArg(key)
  t.deepEqual(foo, {})
  setArgDefault({key, value: '{"foo": "bar"}'})
  foo = getJsonArg(key)
  t.deepEqual(foo, {foo: 'bar'})
})
