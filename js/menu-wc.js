'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ceph-dashboard documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ApiModule.html" data-type="entity-link">ApiModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ab06b9e332c76270404257fb8e8c7500"' : 'data-target="#xs-components-links-module-AppModule-ab06b9e332c76270404257fb8e8c7500"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ab06b9e332c76270404257fb8e8c7500"' :
                                            'id="xs-components-links-module-AppModule-ab06b9e332c76270404257fb8e8c7500"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-3010c8646743c8caeb9ae1acecd8dc77"' : 'data-target="#xs-components-links-module-AuthModule-3010c8646743c8caeb9ae1acecd8dc77"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-3010c8646743c8caeb9ae1acecd8dc77"' :
                                            'id="xs-components-links-module-AuthModule-3010c8646743c8caeb9ae1acecd8dc77"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoleDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoleFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoleListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoleListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SsoNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SsoNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserTabsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserTabsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BlockModule.html" data-type="entity-link">BlockModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlockModule-d705215c45694b436a15880cb5a9c0b8"' : 'data-target="#xs-components-links-module-BlockModule-d705215c45694b436a15880cb5a9c0b8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlockModule-d705215c45694b436a15880cb5a9c0b8"' :
                                            'id="xs-components-links-module-BlockModule-d705215c45694b436a15880cb5a9c0b8"' }>
                                            <li class="link">
                                                <a href="components/IscsiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IscsiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IscsiTabsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IscsiTabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IscsiTargetDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IscsiTargetDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IscsiTargetDiscoveryModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IscsiTargetDiscoveryModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IscsiTargetFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IscsiTargetFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IscsiTargetImageSettingsModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IscsiTargetImageSettingsModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IscsiTargetIqnSettingsModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IscsiTargetIqnSettingsModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IscsiTargetListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IscsiTargetListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdConfigurationFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdConfigurationFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdConfigurationListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdConfigurationListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdImagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdImagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdSnapshotFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdSnapshotFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdSnapshotListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdSnapshotListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdTrashListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdTrashListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdTrashMoveModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdTrashMoveModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdTrashPurgeModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdTrashPurgeModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RbdTrashRestoreModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdTrashRestoreModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CephfsModule.html" data-type="entity-link">CephfsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CephfsModule-abe33dcba61eb495d92e3e0f4639f8a3"' : 'data-target="#xs-components-links-module-CephfsModule-abe33dcba61eb495d92e3e0f4639f8a3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CephfsModule-abe33dcba61eb495d92e3e0f4639f8a3"' :
                                            'id="xs-components-links-module-CephfsModule-abe33dcba61eb495d92e3e0f4639f8a3"' }>
                                            <li class="link">
                                                <a href="components/CephfsChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CephfsChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CephfsClientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CephfsClientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CephfsDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CephfsDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CephfsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CephfsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CephModule.html" data-type="entity-link">CephModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CephSharedModule.html" data-type="entity-link">CephSharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClusterModule.html" data-type="entity-link">ClusterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClusterModule-5932b4131f14b1b36a2e1d59a614d2fc"' : 'data-target="#xs-components-links-module-ClusterModule-5932b4131f14b1b36a2e1d59a614d2fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClusterModule-5932b4131f14b1b36a2e1d59a614d2fc"' :
                                            'id="xs-components-links-module-ClusterModule-5932b4131f14b1b36a2e1d59a614d2fc"' }>
                                            <li class="link">
                                                <a href="components/ConfigurationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigurationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigurationDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigurationDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfigurationFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfigurationFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CrushmapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CrushmapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HostDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HostDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HostsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HostsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MonitorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MonitorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OsdDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OsdDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OsdFlagsModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OsdFlagsModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OsdListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OsdListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OsdPerformanceHistogramComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OsdPerformanceHistogramComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OsdRecvSpeedModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OsdRecvSpeedModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OsdReweightModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OsdReweightModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OsdScrubModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OsdScrubModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrometheusListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrometheusListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-cea412f34ddb97a42dd5dd4a536143ce"' : 'data-target="#xs-components-links-module-ComponentsModule-cea412f34ddb97a42dd5dd4a536143ce"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-cea412f34ddb97a42dd5dd4a536143ce"' :
                                            'id="xs-components-links-module-ComponentsModule-cea412f34ddb97a42dd5dd4a536143ce"' }>
                                            <li class="link">
                                                <a href="components/BackButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BackButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmationModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CriticalConfirmationModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CriticalConfirmationModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorPanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrafanaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrafanaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoPanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanguageSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LanguageSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingPanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RefreshSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RefreshSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectBadgesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectBadgesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SparklineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SparklineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubmitButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubmitButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsageBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsageBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewCacheComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ViewCacheComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WarningPanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WarningPanelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-a1d37119ddcba992ed3994a70617d1d8"' : 'data-target="#xs-components-links-module-CoreModule-a1d37119ddcba992ed3994a70617d1d8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-a1d37119ddcba992ed3994a70617d1d8"' :
                                            'id="xs-components-links-module-CoreModule-a1d37119ddcba992ed3994a70617d1d8"' }>
                                            <li class="link">
                                                <a href="components/ForbiddenComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForbiddenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-e069129e4519710c5319b6ff9fae7ec9"' : 'data-target="#xs-components-links-module-DashboardModule-e069129e4519710c5319b6ff9fae7ec9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-e069129e4519710c5319b6ff9fae7ec9"' :
                                            'id="xs-components-links-module-DashboardModule-e069129e4519710c5319b6ff9fae7ec9"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HealthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HealthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HealthPieComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HealthPieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoGroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoGroupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-DashboardModule-e069129e4519710c5319b6ff9fae7ec9"' : 'data-target="#xs-pipes-links-module-DashboardModule-e069129e4519710c5319b6ff9fae7ec9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DashboardModule-e069129e4519710c5319b6ff9fae7ec9"' :
                                            'id="xs-pipes-links-module-DashboardModule-e069129e4519710c5319b6ff9fae7ec9"' }>
                                            <li class="link">
                                                <a href="pipes/MdsSummaryPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MdsSummaryPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MgrSummaryPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MgrSummaryPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MonSummaryPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MonSummaryPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OsdSummaryPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OsdSummaryPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataTableModule.html" data-type="entity-link">DataTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DataTableModule-cc752b546ab7ee8c8d28aca1b4eab42f"' : 'data-target="#xs-components-links-module-DataTableModule-cc752b546ab7ee8c8d28aca1b4eab42f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DataTableModule-cc752b546ab7ee8c8d28aca1b4eab42f"' :
                                            'id="xs-components-links-module-DataTableModule-cc752b546ab7ee8c8d28aca1b4eab42f"' }>
                                            <li class="link">
                                                <a href="components/TableActionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableActionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableKeyValueComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableKeyValueComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link">DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DirectivesModule-deb11f918a6a0e65c486c0aa146c1841"' : 'data-target="#xs-directives-links-module-DirectivesModule-deb11f918a6a0e65c486c0aa146c1841"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-deb11f918a6a0e65c486c0aa146c1841"' :
                                        'id="xs-directives-links-module-DirectivesModule-deb11f918a6a0e65c486c0aa146c1841"' }>
                                        <li class="link">
                                            <a href="directives/AutofocusDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">AutofocusDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/Copy2ClipboardButtonDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">Copy2ClipboardButtonDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DimlessBinaryDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DimlessBinaryDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/DimlessBinaryPerSecondDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">DimlessBinaryPerSecondDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/IopsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">IopsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MillisecondsDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">MillisecondsDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PasswordButtonDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">PasswordButtonDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MgrModulesModule.html" data-type="entity-link">MgrModulesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MgrModulesModule-c3fdcfe396e9eb235211efea2a91af47"' : 'data-target="#xs-components-links-module-MgrModulesModule-c3fdcfe396e9eb235211efea2a91af47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MgrModulesModule-c3fdcfe396e9eb235211efea2a91af47"' :
                                            'id="xs-components-links-module-MgrModulesModule-c3fdcfe396e9eb235211efea2a91af47"' }>
                                            <li class="link">
                                                <a href="components/MgrModuleDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MgrModuleDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MgrModuleFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MgrModuleFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MgrModuleListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MgrModuleListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MirroringModule.html" data-type="entity-link">MirroringModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MirroringModule-e7659cc520aba9f01ea79361c017c274"' : 'data-target="#xs-components-links-module-MirroringModule-e7659cc520aba9f01ea79361c017c274"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MirroringModule-e7659cc520aba9f01ea79361c017c274"' :
                                            'id="xs-components-links-module-MirroringModule-e7659cc520aba9f01ea79361c017c274"' }>
                                            <li class="link">
                                                <a href="components/DaemonListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DaemonListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PoolEditModeModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PoolEditModeModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PoolEditPeerModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PoolEditPeerModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-MirroringModule-e7659cc520aba9f01ea79361c017c274"' : 'data-target="#xs-pipes-links-module-MirroringModule-e7659cc520aba9f01ea79361c017c274"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-MirroringModule-e7659cc520aba9f01ea79361c017c274"' :
                                            'id="xs-pipes-links-module-MirroringModule-e7659cc520aba9f01ea79361c017c274"' }>
                                            <li class="link">
                                                <a href="pipes/MirrorHealthColorPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MirrorHealthColorPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavigationModule.html" data-type="entity-link">NavigationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavigationModule-46f72a1702014d3061a80fb100981b31"' : 'data-target="#xs-components-links-module-NavigationModule-46f72a1702014d3061a80fb100981b31"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavigationModule-46f72a1702014d3061a80fb100981b31"' :
                                            'id="xs-components-links-module-NavigationModule-46f72a1702014d3061a80fb100981b31"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdministrationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdministrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BreadcrumbsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IdentityComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IdentityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskManagerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskManagerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NfsModule.html" data-type="entity-link">NfsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NfsModule-6dd37f2450c107f3d44de5a637e0e84d"' : 'data-target="#xs-components-links-module-NfsModule-6dd37f2450c107f3d44de5a637e0e84d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NfsModule-6dd37f2450c107f3d44de5a637e0e84d"' :
                                            'id="xs-components-links-module-NfsModule-6dd37f2450c107f3d44de5a637e0e84d"' }>
                                            <li class="link">
                                                <a href="components/Nfs501Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Nfs501Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NfsDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NfsDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NfsFormClientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NfsFormClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NfsFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NfsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NfsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NfsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerformanceCounterModule.html" data-type="entity-link">PerformanceCounterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PerformanceCounterModule-425aa1faa062ca002064c867c662e798"' : 'data-target="#xs-components-links-module-PerformanceCounterModule-425aa1faa062ca002064c867c662e798"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PerformanceCounterModule-425aa1faa062ca002064c867c662e798"' :
                                            'id="xs-components-links-module-PerformanceCounterModule-425aa1faa062ca002064c867c662e798"' }>
                                            <li class="link">
                                                <a href="components/PerformanceCounterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PerformanceCounterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TablePerformanceCounterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TablePerformanceCounterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-356c26631f3ef4d3ad965649bf6e67c0"' : 'data-target="#xs-pipes-links-module-PipesModule-356c26631f3ef4d3ad965649bf6e67c0"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-356c26631f3ef4d3ad965649bf6e67c0"' :
                                            'id="xs-pipes-links-module-PipesModule-356c26631f3ef4d3ad965649bf6e67c0"' }>
                                            <li class="link">
                                                <a href="pipes/BooleanTextPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BooleanTextPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CdDatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CdDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CephReleaseNamePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CephReleaseNamePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CephShortVersionPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CephShortVersionPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DimlessBinaryPerSecondPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DimlessBinaryPerSecondPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DimlessBinaryPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DimlessBinaryPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/DimlessPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DimlessPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EmptyPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmptyPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/EncodeUriPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EncodeUriPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/HealthColorPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HealthColorPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/IopsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IopsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ListPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/LogPriorityPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogPriorityPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MillisecondsPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MillisecondsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OrdinalPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdinalPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RbdConfigurationSourcePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RbdConfigurationSourcePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RelativeDatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RelativeDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RoundPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RoundPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/UpperFirstPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpperFirstPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PoolModule.html" data-type="entity-link">PoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PoolModule-1a8e0625b1cd391d22a0c7db986518cd"' : 'data-target="#xs-components-links-module-PoolModule-1a8e0625b1cd391d22a0c7db986518cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PoolModule-1a8e0625b1cd391d22a0c7db986518cd"' :
                                            'id="xs-components-links-module-PoolModule-1a8e0625b1cd391d22a0c7db986518cd"' }>
                                            <li class="link">
                                                <a href="components/ErasureCodeProfileFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErasureCodeProfileFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PoolDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PoolDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PoolFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PoolFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PoolListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PoolListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RgwModule.html" data-type="entity-link">RgwModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RgwModule-2a33ddc95cddb00d6f99b7e8e2ad9aef"' : 'data-target="#xs-components-links-module-RgwModule-2a33ddc95cddb00d6f99b7e8e2ad9aef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RgwModule-2a33ddc95cddb00d6f99b7e8e2ad9aef"' :
                                            'id="xs-components-links-module-RgwModule-2a33ddc95cddb00d6f99b7e8e2ad9aef"' }>
                                            <li class="link">
                                                <a href="components/Rgw501Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Rgw501Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwBucketDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwBucketDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwBucketFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwBucketFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwBucketListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwBucketListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwDaemonDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwDaemonDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwDaemonListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwDaemonListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwUserCapabilityModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwUserCapabilityModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwUserDetailsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwUserDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwUserFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwUserFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwUserListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwUserListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwUserS3KeyModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwUserS3KeyModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwUserSubuserModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwUserSubuserModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RgwUserSwiftKeyModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RgwUserSwiftKeyModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoutedAuthModule.html" data-type="entity-link">RoutedAuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoutedBlockModule.html" data-type="entity-link">RoutedBlockModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoutedPoolModule.html" data-type="entity-link">RoutedPoolModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RoutedRgwModule.html" data-type="entity-link">RoutedRgwModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link">ServicesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-1640dab50a62b3347a93dae983153b11"' : 'data-target="#xs-injectables-links-module-SharedModule-1640dab50a62b3347a93dae983153b11"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-1640dab50a62b3347a93dae983153b11"' :
                                        'id="xs-injectables-links-module-SharedModule-1640dab50a62b3347a93dae983153b11"' }>
                                        <li class="link">
                                            <a href="injectables/AuthStorageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthStorageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FormatterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FormatterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/PoolListComponent-1.html" data-type="entity-link">PoolListComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppConstants.html" data-type="entity-link">AppConstants</a>
                            </li>
                            <li class="link">
                                <a href="classes/CdFormGroup.html" data-type="entity-link">CdFormGroup</a>
                            </li>
                            <li class="link">
                                <a href="classes/CdNotification.html" data-type="entity-link">CdNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/CdNotificationConfig.html" data-type="entity-link">CdNotificationConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/CdTableAction.html" data-type="entity-link">CdTableAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/CdTableFetchDataContext.html" data-type="entity-link">CdTableFetchDataContext</a>
                            </li>
                            <li class="link">
                                <a href="classes/CdTableSelection.html" data-type="entity-link">CdTableSelection</a>
                            </li>
                            <li class="link">
                                <a href="classes/CdValidators.html" data-type="entity-link">CdValidators</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChartTooltip.html" data-type="entity-link">ChartTooltip</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommonAlert.html" data-type="entity-link">CommonAlert</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigFormCreateRequestModel.html" data-type="entity-link">ConfigFormCreateRequestModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigFormModel.html" data-type="entity-link">ConfigFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigOptionTypes.html" data-type="entity-link">ConfigOptionTypes</a>
                            </li>
                            <li class="link">
                                <a href="classes/Credentials.html" data-type="entity-link">Credentials</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrushRule.html" data-type="entity-link">CrushRule</a>
                            </li>
                            <li class="link">
                                <a href="classes/CrushStep.html" data-type="entity-link">CrushStep</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomOption.html" data-type="entity-link">CustomOption</a>
                            </li>
                            <li class="link">
                                <a href="classes/ErasureCodeProfile.html" data-type="entity-link">ErasureCodeProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExecutingTask.html" data-type="entity-link">ExecutingTask</a>
                            </li>
                            <li class="link">
                                <a href="classes/FinishedTask.html" data-type="entity-link">FinishedTask</a>
                            </li>
                            <li class="link">
                                <a href="classes/Item.html" data-type="entity-link">Item</a>
                            </li>
                            <li class="link">
                                <a href="classes/LocaleHelper.html" data-type="entity-link">LocaleHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponse.html" data-type="entity-link">LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/PerformanceCounterBreadcrumbsResolver.html" data-type="entity-link">PerformanceCounterBreadcrumbsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link">Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permissions.html" data-type="entity-link">Permissions</a>
                            </li>
                            <li class="link">
                                <a href="classes/PgCategory.html" data-type="entity-link">PgCategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pool.html" data-type="entity-link">Pool</a>
                            </li>
                            <li class="link">
                                <a href="classes/PoolEditModeResponseModel.html" data-type="entity-link">PoolEditModeResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PoolEditPeerResponseModel.html" data-type="entity-link">PoolEditPeerResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/PoolFormData.html" data-type="entity-link">PoolFormData</a>
                            </li>
                            <li class="link">
                                <a href="classes/PoolFormInfo.html" data-type="entity-link">PoolFormInfo</a>
                            </li>
                            <li class="link">
                                <a href="classes/PoolStat.html" data-type="entity-link">PoolStat</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrometheusAlert.html" data-type="entity-link">PrometheusAlert</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrometheusCustomAlert.html" data-type="entity-link">PrometheusCustomAlert</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrometheusNotification.html" data-type="entity-link">PrometheusNotification</a>
                            </li>
                            <li class="link">
                                <a href="classes/PrometheusNotificationAlert.html" data-type="entity-link">PrometheusNotificationAlert</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdFormCloneRequestModel.html" data-type="entity-link">RbdFormCloneRequestModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdFormCopyRequestModel.html" data-type="entity-link">RbdFormCopyRequestModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdFormCreateRequestModel.html" data-type="entity-link">RbdFormCreateRequestModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdFormEditRequestModel.html" data-type="entity-link">RbdFormEditRequestModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdFormModel.html" data-type="entity-link">RbdFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdFormResponseModel.html" data-type="entity-link">RbdFormResponseModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdModel.html" data-type="entity-link">RbdModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdParentModel.html" data-type="entity-link">RbdParentModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdSnapshotActionsModel.html" data-type="entity-link">RbdSnapshotActionsModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RbdSnapshotModel.html" data-type="entity-link">RbdSnapshotModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RgwUserCapability.html" data-type="entity-link">RgwUserCapability</a>
                            </li>
                            <li class="link">
                                <a href="classes/RgwUserS3Key.html" data-type="entity-link">RgwUserS3Key</a>
                            </li>
                            <li class="link">
                                <a href="classes/RgwUserSubuser.html" data-type="entity-link">RgwUserSubuser</a>
                            </li>
                            <li class="link">
                                <a href="classes/RgwUserSwiftKey.html" data-type="entity-link">RgwUserSwiftKey</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoleFormModel.html" data-type="entity-link">RoleFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectMessages.html" data-type="entity-link">SelectMessages</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectOption.html" data-type="entity-link">SelectOption</a>
                            </li>
                            <li class="link">
                                <a href="classes/StartCaseBreadcrumbsResolver.html" data-type="entity-link">StartCaseBreadcrumbsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Task.html" data-type="entity-link">Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskException.html" data-type="entity-link">TaskException</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskMessage.html" data-type="entity-link">TaskMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskMessageOperation.html" data-type="entity-link">TaskMessageOperation</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskSubscription.html" data-type="entity-link">TaskSubscription</a>
                            </li>
                            <li class="link">
                                <a href="classes/URLBuilderService.html" data-type="entity-link">URLBuilderService</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserFormModel.html" data-type="entity-link">UserFormModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserFormRoleModel.html" data-type="entity-link">UserFormRoleModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActionLabelsI18n.html" data-type="entity-link">ActionLabelsI18n</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CdFormBuilder.html" data-type="entity-link">CdFormBuilder</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CephfsService.html" data-type="entity-link">CephfsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConfigurationService.html" data-type="entity-link">ConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErasureCodeProfileService.html" data-type="entity-link">ErasureCodeProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeatureTogglesService.html" data-type="entity-link">FeatureTogglesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HealthService.html" data-type="entity-link">HealthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HostService.html" data-type="entity-link">HostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IscsiService.html" data-type="entity-link">IscsiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JsErrorHandler.html" data-type="entity-link">JsErrorHandler</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggingService.html" data-type="entity-link">LoggingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogsService.html" data-type="entity-link">LogsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MgrModuleService.html" data-type="entity-link">MgrModuleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MonitorService.html" data-type="entity-link">MonitorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NfsService.html" data-type="entity-link">NfsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link">NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OsdService.html" data-type="entity-link">OsdService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PerformanceCounterService.html" data-type="entity-link">PerformanceCounterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PgCategoryService.html" data-type="entity-link">PgCategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PoolService.html" data-type="entity-link">PoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrometheusAlertFormatter.html" data-type="entity-link">PrometheusAlertFormatter</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrometheusAlertService.html" data-type="entity-link">PrometheusAlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrometheusNotificationService.html" data-type="entity-link">PrometheusNotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrometheusService.html" data-type="entity-link">PrometheusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RbdConfigurationService.html" data-type="entity-link">RbdConfigurationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RbdMirroringService.html" data-type="entity-link">RbdMirroringService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RbdService.html" data-type="entity-link">RbdService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshIntervalService.html" data-type="entity-link">RefreshIntervalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RgwBucketService.html" data-type="entity-link">RgwBucketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RgwDaemonService.html" data-type="entity-link">RgwDaemonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RgwUserService.html" data-type="entity-link">RgwUserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleService.html" data-type="entity-link">RoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScopeService.html" data-type="entity-link">ScopeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SettingsService.html" data-type="entity-link">SettingsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SummaryService.html" data-type="entity-link">SummaryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskListService.html" data-type="entity-link">TaskListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskManagerService.html" data-type="entity-link">TaskManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskMessageService.html" data-type="entity-link">TaskMessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskWrapperService.html" data-type="entity-link">TaskWrapperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TcmuIscsiService.html" data-type="entity-link">TcmuIscsiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ApiInterceptorService.html" data-type="entity-link">ApiInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/BreadcrumbsResolver.html" data-type="entity-link">BreadcrumbsResolver</a>
                            </li>
                            <li class="link">
                                <a href="guards/FeatureTogglesGuardService.html" data-type="entity-link">FeatureTogglesGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/ModuleStatusGuardService.html" data-type="entity-link">ModuleStatusGuardService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CdTableColumn.html" data-type="entity-link">CdTableColumn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CdUserConfig.html" data-type="entity-link">CdUserConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormFieldDescription.html" data-type="entity-link">FormFieldDescription</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBreadcrumb.html" data-type="entity-link">IBreadcrumb</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RbdConfigurationEntry.html" data-type="entity-link">RbdConfigurationEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RbdConfigurationExtraField.html" data-type="entity-link">RbdConfigurationExtraField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RbdConfigurationSection.html" data-type="entity-link">RbdConfigurationSection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RbdImage.html" data-type="entity-link">RbdImage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RbdPool.html" data-type="entity-link">RbdPool</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});