# -*- coding: utf-8 -*-
{
    'name': "replier",
    'summary': "Reply button in every message threads",
    'description': """
        Reply button in every message threads
    """,
    'author': "F4LC0NN",
    'website': "https://github.com/f4lc0nn",
    'icon': '/replier/static/description/logo/replier100.png',
    'license': 'LGPL-3',

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Sales',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': [
        'base', 
        'mail',
        'project',
    ],

    # always loaded
    'data': [
    ],

    'assets': {
        'web.assets_backend': [
            'replier/static/src/**/*'
        ],
    },
    
    # only loaded in demonstration mode
    'demo': [
    ],

    'installable': True,
    'auto-install': False,
    'application': True,
}

