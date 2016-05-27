import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import NavBar from '../../src/components/NavBar';
import { assert } from 'chai';

describe('components NavBar', () => {

    it('should render ThoughtWorkers text', () => {
        const wrapper = shallow(<NavBar />);
        
        assert.equal(wrapper.children().at(0).contains('ThoughtWorkers'),true);
    });
});