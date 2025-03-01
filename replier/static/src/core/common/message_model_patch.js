/** @odoo-module **/

import { Message } from '@mail/core/common/message_model';
import { patch } from '@web/core/utils/patch';

patch(Message.prototype, {
    /** 
     * @override
     * @description We want to show the reply button for every chatter
     */
    canReplyTo() {
        return this.message_type !== 'user_notification';
    },

    openComposer() {
        const logNoteButton = document.querySelector(".o-mail-Chatter-logNote");
        const sendMessageButton = document.querySelector(".o-mail-Chatter-sendMessage");

        if (this.message_type === "comment") {
            if (this.is_note) {
                logNoteButton.click();
            } else {
                sendMessageButton.click();
            }
        } else {
            logNoteButton.click();
        }
    },
});
