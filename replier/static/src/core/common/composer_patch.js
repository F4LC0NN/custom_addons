/** @odoo-module **/

import { Composer } from '@mail/core/common/composer';

Composer.props.push('messageToReplyTo?', 'onDiscardCallback?');
