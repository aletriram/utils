import Strings from '../src/Strings';
import { expect } from 'chai';
import 'mocha';

describe('Strings', () => {

	it('toUrl inalterada', () => {
		const url = 'hola-que-tal';
		expect(Strings.toUrl(url)).to.equal(url);
	});

	it('toUrl Holaquétal quita tildes', () => {
		const url = 'Holaquétal';
		expect(Strings.toUrl(url)).to.equal('holaquetal');
	});

	it('toUrl "Hola   qué tal" espacios por guiones ', () => {
		const url = 'Hola   qué tal';
		expect(Strings.toUrl(url)).to.equal('hola-que-tal');
	});

	it('md5 "Hola   qué tal" convertida ', () => {
		const msg = 'Hola qué tal';
		expect(Strings.md5(msg)).to.equal('70842c2feb70eb9f70dda274ebf95ef6');
	});

});