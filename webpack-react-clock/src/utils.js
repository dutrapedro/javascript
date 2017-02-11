'use strict'

const JOIN_SEPARATOR = ':';

const Utils = {
    joinStringArray: (values) => {
        return values.join(JOIN_SEPARATOR);
    }
}

export default Utils;