'use strict';

/**
 * Config for the router
 */
app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'JS_REQUIRES',
    function($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, jsRequires) {

        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.filter = $filterProvider.register;
        app.factory = $provide.factory;
        app.service = $provide.service;
        app.constant = $provide.constant;
        app.value = $provide.value;

        // LAZY MODULES

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: jsRequires.modules
        });

        // APPLICATION ROUTES
        // -----------------------------------
        // For any unmatched url, redirect to /app/dashboard
        $urlRouterProvider.otherwise("/login/signin");
        //
        // Set up the states
        $stateProvider.state('app', {
                url: "/app",
                templateUrl: "assets/views/app.html",
                resolve: loadSequence('modernizr', 'moment', 'angularMoment', 'uiSwitch', 'perfect-scrollbar-plugin', 'toaster', 'ngAside', 'vAccordion', 'sweet-alert', 'chartjs', 'tc.chartjs', 'oitozero.ngSweetAlert', 'chatCtrl', 'truncate', 'htmlToPlaintext', 'angular-notification-icons'),
                abstract: true
            }).state('app.Examples', { //Etudiants 
                url: "/Examples",
                templateUrl: "assets/views/examples.html",
                resolve: loadSequence('jquery-sparkline', 'ngTable', 'ngTableCtrl'),
                title: 'Example',
                ncyBreadcrumb: {
                    label: 'Example'
                }
                // }) check: function($windows, user) {
                //     if (!user.issUserLoggedIn()) {
                //         $window.location.href = '#/login/signin';
                //     }
                // },
            }).state('app.dashboard', {
                url: "/dashboard",
                templateUrl: "assets/views/dashboard.html",
                resolve: {
                    check: function($location, user) {
                        if (!user.isUserLoggedIn()) {
                            // $window.location.href = '#/login/signin';
                            $location.path('/signin');
                            // $window.location.href = '#/login/signin';
                        }

                    },
                    scripts: loadSequence('jquery-sparkline', 'dashboardCtrl', 'user').deps
                },
                title: 'Dashboard',
                ncyBreadcrumb: {
                    label: 'Dashboard'
                },

            }).state('app.ReserverSC', {
                url: "/ReserverSC",
                templateUrl: "assets/views/Service Clients/ReserPourClient.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'Reserver Pour Un Client ',
                ncyBreadcrumb: {
                    label: 'Reserver Pour Un Client'
                }
            }).state('app.MonRecu', {
                url: "/MonRecu",
                templateUrl: "assets/views/client/monrecu.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'Reserver Pour Un Client ',
                ncyBreadcrumb: {
                    label: 'Reserver Pour Un Client'
                }
            }).state('app.RecuClient', {
                url: "/RecuClient",
                templateUrl: "assets/views/client/RecuClient.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'MyCtrl'),
                title: 'Recu Client ',
                ncyBreadcrumb: {
                    label: 'Recu Client'
                }
            }).state('app.RecuProd', {
                url: "/RecuProd",
                templateUrl: "assets/views/Service Production /RecuProd.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'MyCtrl'),
                title: 'Recu Client ',
                ncyBreadcrumb: {
                    label: 'Recu Client'
                }
            }).state('app.HistoriqueCmd', {
                url: "/HitoriqueCmd",
                templateUrl: "assets/views/client/HistoriqueCmd.html",
                resolve: loadSequence('jquery-sparkline', 'ngTable', 'ngTableCtrl', 'dynamicTableCtrl'),
                title: 'Historique des commandes ',
                ncyBreadcrumb: {
                    label: 'Historique des commandes '
                }
            }).state('app.Reservation', {
                url: "/Reservation",
                templateUrl: "assets/views/client/reservation.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'Nouvelle reservation ',
                ncyBreadcrumb: {
                    label: 'Nouvelle reservation'
                }
            }).state('app.CmdEnCours', {
                url: "/CommandesEnCours",
                templateUrl: "assets/views/client/CmdEnCours.html",
                resolve: loadSequence('jquery-sparkline', 'ngTable', 'ngTableCtrl', 'dynamicTableCtrl'),
                title: 'Commandes En Cours ',
                ncyBreadcrumb: {
                    label: 'Commandes En Cours'
                }
            }).state('app.Reserver', {
                url: "/Reserver",
                templateUrl: "assets/views/Livreur/ValidationCommandes.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'Reservation ',
                ncyBreadcrumb: {
                    label: 'Reservation'
                }
            }).state('app.Date', {
                url: "/Date",
                templateUrl: "assets/views/date.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'date ',
                ncyBreadcrumb: {
                    label: 'date'
                }
            }).state('app.mescommandes', {
                url: "/mescommandes",
                templateUrl: "assets/views/client/mescommandes.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'Reservation ',
                ncyBreadcrumb: {
                    label: 'Reservation'
                }
            }).state('app.Client', {
                url: "/Client",
                templateUrl: "assets/views/client/tableauC.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'Espace Client ',
                ncyBreadcrumb: {
                    label: 'Espace Client'
                }
            }).state('app.Panier', {
                url: "/Panier",
                templateUrl: "assets/views/Livreur /panier.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl','vAccordionCtrl'),
                title: 'Panier ',
                ncyBreadcrumb: {
                    label: 'Panier'
                }
            }).state('app.BdClients', {
                url: "/BdClients",
                templateUrl: "assets/views/Service Clients/tableauSC_clients.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl','ngTableCtrl','ngTable'),
                title: ' Liste des Clients ',
                ncyBreadcrumb: {
                    label: 'Espace Service Clients'
                }
            }).state('app.BdCommandes', {
                url: "/BdCommandes",
                templateUrl: "assets/views/Service Clients/tableauSC.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl', 'LivreurCtrl'),
                title: 'Liste des commandes en attentes ',
                ncyBreadcrumb: {
                    label: 'Espace Service Clients'
                }
            })
            .state('app.BdCommandesDone', {
                url: "/BdCommandesDone",
                templateUrl: "assets/views/Service Clients/tableauSCCmd.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl', 'LivreurCtrl'),
                title: 'Liste des commandes Done ',
                ncyBreadcrumb: {
                    label: 'Espace Service Clients'
                }
            }).state('app.BdLSC', {
                url: "/ModificationCommande",
                templateUrl: "assets/views/Service Livraison /ModificationCommande.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'Liste des commandes confirmé',
                ncyBreadcrumb: {
                    label: 'Liste des commandes confirmé'
                }
            }).state('app.SLSP', {
                url: "/PrepLivraison",
                templateUrl: "assets/views/Service Livraison /CommandesALivrer.html",
                resolve: loadSequence('jquery-sparkline', 'touchspin-plugin', 'dynamicTableCtrl'),
                title: 'Liste des a livrer ',
                ncyBreadcrumb: {
                    label: 'Liste des commandes a livr'
                }

            }).state('app.calendrier', {
                url: "/Calendrier",
                templateUrl: "assets/views/Service Clients/Calendrier.html",
                resolve: loadSequence('moment', 'dynamicTableCtrl', 'mwl.calendar', 'calendarCtrl'),
                title: 'Liste des commandes confirmé',
                ncyBreadcrumb: {
                    label: 'Liste des commandes confirmé'
                }
            }).state('app.cmdp', {
                url: "/cmdp",
                templateUrl: "assets/views/Service Production /cmdaprep.html",
                resolve: loadSequence('moment', 'dynamicTableCtrl', 'mwl.calendar', 'calendarCtrl'),
                title: 'Liste des commandes a preparer',
                ncyBreadcrumb: {
                    label: 'Liste des commandes à preparer'
                }
            }).state('app.cmdl', {
                url: "/cmdl",
                templateUrl: "assets/views/Service Production /cmdalivr.html",
                resolve: loadSequence('moment', 'dynamicTableCtrl', 'mwl.calendar', 'calendarCtrl'),
                title: 'Liste des commandes a livré',
                ncyBreadcrumb: {
                    label: 'Liste des commandes à livrer'
                }
            }).state('app.ToCollecte', {
                url: "/ToCollecte",
                templateUrl: "assets/views/Livreur /ValidationCommandes.html",
                resolve: loadSequence('moment', 'dynamicTableCtrl', 'mwl.calendar', 'LivreurCtrl'),
                title: 'Liste des commandes a collecter',
                ncyBreadcrumb: {
                    label: 'Liste des commandes a collecter'
                }
            }).state('app.ToDeliver', {
                url: "/ToDeliver",
                templateUrl: "assets/views/Livreur /ValidationLivraison.html",
                resolve: loadSequence('moment', 'dynamicTableCtrl', 'mwl.calendar', 'LivreurCtrl'),
                title: 'Liste des commandes a Livrer',
                ncyBreadcrumb: {
                    label: 'Liste des commandes a Livrer'
                }
            })
            // }).state('app.LockScreen', {
            //     url: "/LockScreen",
            //     templateUrl: "assets/views/Admin /LockScreen.html",
            //     resolve: loadSequence('moment', 'dynamicTableCtrl', 'mwl.calendar', 'LivreurCtrl'),
            //     title: 'LockScreen',
            //     ncyBreadcrumb: {
            //         label: 'LockScreen'
            //     }
            // })



        /*.state('app.Student', { //Etudiants 
                        url: "/Student",
                        templateUrl: "assets/views/studentpage.html",
                        resolve: loadSequence('jquery-sparkline', 'ngTable', 'ngTableCtrl'),
                        title: 'Student',
                        ncyBreadcrumb: {
                            label: 'Student'
                        }
                    }).state('app.Teacher', { //Professeurs
                        url: "/teacher",
                        templateUrl: "assets/views/teacher.html",
                        resolve: loadSequence('jquery-sparkline', 'ngTable', 'ngTableCtrl', 'validationCtrl', 'userCtrl', 'flow'),
                        title: 'Teacher',
                        ncyBreadcrumb: {
                            label: 'Teacher'
                        }
                    })
                    .state('app.utilisateur', { //Utilisateurs 
                        url: "/utilisateur",
                        templateUrl: "assets/views/utilisateur.html",
                        resolve: loadSequence('jquery-sparkline', 'ngTable', 'ngTableCtrl', 'validationCtrl', 'userCtrl', 'flow'),
                        title: 'utilisateur',
                        ncyBreadcrumb: {
                            label: 'utilisateur'
                        }
                    }).state('app.annonces', { //Annonces 
                        url: "/annonces",
                        templateUrl: "assets/views/annonces.html",
                        resolve: loadSequence('jquery-sparkline', 'ngTable', 'ngTableCtrl', 'validationCtrl', 'userCtrl', 'flow'),
                        title: 'Annonces',
                        ncyBreadcrumb: {
                            label: 'Annonces'
                        }
                    }).state('app.emploi', { //Emploi 
                        url: "/emploi",
                        templateUrl: "assets/views/emploi.html",
                        resolve: loadSequence('moment', 'mwl.calendar', 'calendarCtrl'),
                        title: 'Emploi',
                        ncyBreadcrumb: {
                            label: 'Emploi'
                        }
                    }).state('app.ui', {
                        url: '/ui',
                        template: '<div ui-view class="fade-in-up"></div>',
                        title: 'UI Elements',
                        ncyBreadcrumb: {
                            label: 'UI Elements'
                        }
                    }).state('app.ui.elements', {
                        url: '/elements',
                        templateUrl: "assets/views/ui_elements.html",
                        title: 'Elements',
                        icon: 'ti-layout-media-left-alt',
                        ncyBreadcrumb: {
                            label: 'Elements'
                        }
                    }).state('app.ui.buttons', {
                        url: '/buttons',
                        templateUrl: "assets/views/ui_buttons.html",
                        title: 'Buttons',
                        resolve: loadSequence('spin', 'ladda', 'angular-ladda', 'laddaCtrl'),
                        ncyBreadcrumb: {
                            label: 'Buttons'
                        }
                    }).state('app.ui.links', {
                        url: '/links',
                        templateUrl: "assets/views/ui_links.html",
                        title: 'Link Effects',
                        ncyBreadcrumb: {
                            label: 'Link Effects'
                        }
                    }).state('app.ui.icons', {
                        url: '/icons',
                        templateUrl: "assets/views/ui_icons.html",
                        title: 'Font Awesome Icons',
                        ncyBreadcrumb: {
                            label: 'Font Awesome Icons'
                        },
                        resolve: loadSequence('iconsCtrl')
                    }).state('app.ui.lineicons', {
                        url: '/line-icons',
                        templateUrl: "assets/views/ui_line_icons.html",
                        title: 'Linear Icons',
                        ncyBreadcrumb: {
                            label: 'Linear Icons'
                        },
                        resolve: loadSequence('iconsCtrl')
                    }).state('app.ui.modals', {
                        url: '/modals',
                        templateUrl: "assets/views/ui_modals.html",
                        title: 'Modals',
                        ncyBreadcrumb: {
                            label: 'Modals'
                        },
                        resolve: loadSequence('asideCtrl')
                    }).state('app.ui.toggle', {
                        url: '/toggle',
                        templateUrl: "assets/views/ui_toggle.html",
                        title: 'Toggle',
                        ncyBreadcrumb: {
                            label: 'Toggle'
                        }
                    }).state('app.ui.tabs_accordions', {
                        url: '/accordions',
                        templateUrl: "assets/views/ui_tabs_accordions.html",
                        title: "Tabs & Accordions",
                        ncyBreadcrumb: {
                            label: 'Tabs & Accordions'
                        },
                        resolve: loadSequence('vAccordionCtrl')
                    }).state('app.ui.panels', {
                        url: '/panels',
                        templateUrl: "assets/views/ui_panels.html",
                        title: 'Panels',
                        ncyBreadcrumb: {
                            label: 'Panels'
                        }
                    }).state('app.ui.notifications', {
                        url: '/notifications',
                        templateUrl: "assets/views/ui_notifications.html",
                        title: 'Notifications',
                        ncyBreadcrumb: {
                            label: 'Notifications'
                        },
                        resolve: loadSequence('toasterCtrl', 'sweetAlertCtrl', 'NotificationIconsCtrl')
                    }).state('app.ui.treeview', {
                        url: '/treeview',
                        templateUrl: "assets/views/ui_tree.html",
                        title: 'TreeView',
                        ncyBreadcrumb: {
                            label: 'Treeview'
                        },
                        resolve: loadSequence('angularBootstrapNavTree', 'treeCtrl')
                    }).state('app.ui.media', {
                        url: '/media',
                        templateUrl: "assets/views/ui_media.html",
                        title: 'Media',
                        ncyBreadcrumb: {
                            label: 'Media'
                        }
                    }).state('app.ui.nestable', {
                        url: '/nestable2',
                        templateUrl: "assets/views/ui_nestable.html",
                        title: 'Nestable List',
                        ncyBreadcrumb: {
                            label: 'Nestable List'
                        },
                        resolve: loadSequence('jquery-nestable-plugin', 'ng-nestable', 'nestableCtrl')
                    }).state('app.ui.typography', {
                        url: '/typography',
                        templateUrl: "assets/views/ui_typography.html",
                        title: 'Typography',
                        ncyBreadcrumb: {
                            label: 'Typography'
                        }
                    }).state('app.table', {
                        url: '/table',
                        template: '<div ui-view class="fade-in-up"></div>',
                        title: 'Tables',
                        ncyBreadcrumb: {
                            label: 'Tables'
                        }
                    }).state('app.table.basic', {
                        url: '/basic',
                        templateUrl: "assets/views/table_basic.html",
                        title: 'Basic Tables',
                        ncyBreadcrumb: {
                            label: 'Basic'
                        }
                    }).state('app.table.responsive', {
                        url: '/responsive',
                        templateUrl: "assets/views/table_responsive.html",
                        title: 'Responsive Tables',
                        ncyBreadcrumb: {
                            label: 'Responsive'
                        }
                    }).state('app.table.dynamic', {
                        url: '/dynamic',
                        templateUrl: "assets/views/table_dynamic.html",
                        title: 'Dynamic Tables',
                        ncyBreadcrumb: {
                            label: 'Dynamic'
                        },
                        resolve: loadSequence('dynamicTableCtrl')
                    }).state('app.table.data', {
                        url: '/data',
                        templateUrl: "assets/views/table_data.html",
                        title: 'ngTable',
                        ncyBreadcrumb: {
                            label: 'ngTable'
                        },
                        resolve: loadSequence('ngTable', 'ngTableCtrl')
                    }).state('app.table.export', {
                        url: '/export',
                        templateUrl: "assets/views/table_export.html",
                        title: 'Table'
                    }).state('app.form', {
                        url: '/form',
                        template: '<div ui-view class="fade-in-up"></div>',
                        title: 'Forms',
                        ncyBreadcrumb: {
                            label: 'Forms'
                        }
                    }).state('app.form.elements', {
                        url: '/elements',
                        templateUrl: "assets/views/form_elements.html",
                        title: 'Forms Elements',
                        ncyBreadcrumb: {
                            label: 'Elements'
                        },
                        resolve: loadSequence('ui.select', 'monospaced.elastic', 'ui.mask', 'touchspin-plugin', 'selectCtrl', 'spectrum-plugin', 'angularSpectrumColorpicker')
                    }).state('app.form.xeditable', {
                        url: '/xeditable',
                        templateUrl: "assets/views/form_xeditable.html",
                        title: 'Angular X-Editable',
                        ncyBreadcrumb: {
                            label: 'X-Editable'
                        },
                        resolve: loadSequence('xeditable', 'checklist-model', 'xeditableCtrl')
                    }).state('app.form.texteditor', {
                        url: '/editor',
                        templateUrl: "assets/views/form_text_editor.html",
                        title: 'Text Editor',
                        ncyBreadcrumb: {
                            label: 'Text Editor'
                        },
                        resolve: loadSequence('ckeditor-plugin', 'ckeditor', 'ckeditorCtrl')
                    }).state('app.form.wizard', {
                        url: '/wizard',
                        templateUrl: "assets/views/form_wizard.html",
                        title: 'Form Wizard',
                        ncyBreadcrumb: {
                            label: 'Wizard'
                        },
                        resolve: loadSequence('wizardCtrl')
                    }).state('app.form.validation', {
                        url: '/validation',
                        templateUrl: "assets/views/form_validation.html",
                        title: 'Form Validation',
                        ncyBreadcrumb: {
                            label: 'Validation'
                        },
                        resolve: loadSequence('validationCtrl')
                    }).state('app.form.cropping', {
                        url: '/image-cropping',
                        templateUrl: "assets/views/form_image_cropping.html",
                        title: 'Image Cropping',
                        ncyBreadcrumb: {
                            label: 'Image Cropping'
                        },
                        resolve: loadSequence('ngImgCrop', 'cropCtrl')
                    }).state('app.form.upload', {
                        url: '/file-upload',
                        templateUrl: "assets/views/form_file_upload.html",
                        title: 'Multiple File Upload',
                        ncyBreadcrumb: {
                            label: 'File Upload'
                        },
                        resolve: loadSequence('angularFileUpload', 'uploadCtrl')
                    }).state('app.pages', {
                        url: '/pages',
                        template: '<div ui-view class="fade-in-up"></div>',
                        title: 'Pages',
                        ncyBreadcrumb: {
                            label: 'Pages'
                        }
                    }).state('app.pages.user', {
                        url: '/user',
                        templateUrl: "assets/views/pages_user_profile.html",
                        title: 'User Profile',
                        ncyBreadcrumb: {
                            label: 'User Profile'
                        },
                        resolve: loadSequence('flow', 'userCtrl')
                    }).state('app.pages.invoice', {
                        url: '/invoice',
                        templateUrl: "assets/views/pages_invoice.html",
                        title: 'Invoice',
                        ncyBreadcrumb: {
                            label: 'Invoice'
                        }
                    }).state('app.pages.timeline', {
                        url: '/timeline',
                        templateUrl: "assets/views/pages_timeline.html",
                        title: 'Timeline',
                        ncyBreadcrumb: {
                            label: 'Timeline'
                        },
                        resolve: loadSequence('ngMap')
                    }).state('app.pages.calendar', {
                        url: '/calendar',
                        templateUrl: "assets/views/pages_calendar.html",
                        title: 'Calendar',
                        ncyBreadcrumb: {
                            label: 'Calendar'
                        },
                        resolve: loadSequence('moment', 'mwl.calendar', 'calendarCtrl')
                    }).state('app.pages.messages', {
                        url: '/messages',
                        templateUrl: "assets/views/pages_messages.html",
                        resolve: loadSequence('truncate', 'htmlToPlaintext', 'inboxCtrl')
                    }).state('app.pages.messages.inbox', {
                        url: '/inbox/:inboxID',
                        templateUrl: "assets/views/pages_inbox.html",
                        controller: 'ViewMessageCrtl'
                    }).state('app.pages.blank', {
                        url: '/blank',
                        templateUrl: "assets/views/pages_blank_page.html",
                        ncyBreadcrumb: {
                            label: 'Starter Page'
                        }
                    }).state('app.utilities', {
                        url: '/utilities',
                        template: '<div ui-view class="fade-in-up"></div>',
                        title: 'Utilities',
                        ncyBreadcrumb: {
                            label: 'Utilities'
                        }
                    }).state('app.utilities.search', {
                        url: '/search',
                        templateUrl: "assets/views/utility_search_result.html",
                        title: 'Search Results',
                        ncyBreadcrumb: {
                            label: 'Search Results'
                        }
                    }).state('app.utilities.pricing', {
                        url: '/pricing',
                        templateUrl: "assets/views/utility_pricing_table.html",
                        title: 'Pricing Table',
                        ncyBreadcrumb: {
                            label: 'Pricing Table'
                        }
                    }).state('app.maps', {
                        url: "/maps",
                        templateUrl: "assets/views/maps.html",
                        resolve: loadSequence('ngMap', 'mapsCtrl'),
                        title: "Maps",
                        ncyBreadcrumb: {
                            label: 'Maps'
                        }
                    }).state('app.charts', {
                        url: "/charts",
                        templateUrl: "assets/views/charts.html",
                        resolve: loadSequence('chartjs', 'tc.chartjs', 'chartsCtrl'),
                        title: "Charts",
                        ncyBreadcrumb: {
                            label: 'Charts'
                        }
                    }).state('app.documentation', {
                        url: "/documentation",
                        templateUrl: "assets/views/documentation.html",
                        title: "Documentation",
                        ncyBreadcrumb: {
                            label: 'Documentation'
                        }
                    }).state('error', {
                        url: '/error',
                        template: '<div ui-view class="fade-in-up"></div>'
                    }).state('error.404', {
                        url: '/404',
                        templateUrl: "assets/views/utility_404.html",
                    }).state('error.500', {
                        url: '/500',
                        templateUrl: "assets/views/utility_500.html",
                    })*/

        // Login routes

        .state('login', {
            url: '/login',
            template: '<div ui-view class="fade-in-right-big smooth"></div>',
            abstract: true
        }).state('login.signin', {
            url: '/signin',
            templateUrl: "assets/views/login_login.html"
        }).state('login.forgot', {
            url: '/forgot',
            templateUrl: "assets/views/login_forgot.html"
        }).state('login.registration', {
            url: '/registration',
            templateUrl: "assets/views/client/createAccount.html"
        }).state('login.lockscreen', {
            url: '/lock',
            templateUrl: "assets/views/login_lock_screen.html"
        });

        // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
        function loadSequence() {
            var _args = arguments;
            return {
                deps: ['$ocLazyLoad', '$q',
                    function($ocLL, $q) {
                        var promise = $q.when(1);
                        for (var i = 0, len = _args.length; i < len; i++) {
                            promise = promiseThen(_args[i]);
                        }
                        return promise;

                        function promiseThen(_arg) {
                            if (typeof _arg == 'function')
                                return promise.then(_arg);
                            else
                                return promise.then(function() {
                                    var nowLoad = requiredData(_arg);
                                    if (!nowLoad)
                                        return $.error('Route resolve: Bad resource name [' + _arg + ']');
                                    return $ocLL.load(nowLoad);
                                });
                        }

                        function requiredData(name) {
                            if (jsRequires.modules)
                                for (var m in jsRequires.modules)
                                    if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
                                        return jsRequires.modules[m];
                            return jsRequires.scripts && jsRequires.scripts[name];
                        }
                    }
                ]
            };
        }
    }
]);