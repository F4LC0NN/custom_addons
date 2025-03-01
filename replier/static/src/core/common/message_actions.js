/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { messageActionsRegistry } from "@mail/core/common/message_actions";
import { toRaw } from "@odoo/owl";

messageActionsRegistry.add("reply-to", {
    condition: (component) => component.props.message.canReplyTo(component.props.thread),
    icon: "fa fa-reply",
    title: _t("Reply"),
    onClick: (component) => {
        const message = toRaw(component.props.message);
        const thread = toRaw(component.props.thread);
        // I do not const message here because 
        // I don't need the raw object of message to call openComposer()
        component.props.message.openComposer();
        component.props.messageToReplyTo.toggle(thread, message);
    },
    sequence: (component) => (component.props.thread?.eq(component.store.inbox) ? 55 : 20),
}, { force: true });
