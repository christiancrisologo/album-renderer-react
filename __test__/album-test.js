import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Album from '../src/client/app/components/Album';
import MainTable from '../src/client/app/components/MainTable';
import renderer from 'react-test-renderer';


describe('Album', ()=> {
  it('should Album render ', function () {
    let album = TestUtils.renderIntoDocument(<Album/>);
    expect(album).toExist();
  });
});
