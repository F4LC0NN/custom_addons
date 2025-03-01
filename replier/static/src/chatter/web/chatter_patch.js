/** @odoo-module **/

import { Chatter } from '@mail/chatter/web_portal/chatter';
import { patch } from '@web/core/utils/patch';
import { useMessageToReplyTo } from '@mail/utils/common/hooks';


patch(Chatter.prototype, {
    setup() {
        super.setup(...arguments);
        this.messageToReplyTo = useMessageToReplyTo();
    }
});
