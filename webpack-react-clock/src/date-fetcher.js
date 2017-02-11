'use strict';

import Utils from './utils';

const dateFetcher = {
    fetch: () => {
        let currentDate = new Date();
        return Utils.joinStringArray([currentDate.getHours(), 
                                        currentDate.getMinutes(), 
                                        currentDate.getSeconds()
                                        ]);
    }
}

export default dateFetcher;