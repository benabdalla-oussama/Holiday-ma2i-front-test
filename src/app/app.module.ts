import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { StyleClassModule } from 'primeng/styleclass';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InplaceModule } from 'primeng/inplace';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { LightboxModule } from 'primeng/lightbox';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from 'primeng/splitter';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { TerminalModule } from 'primeng/terminal';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeTableModule } from 'primeng/treetable';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
 
import { AppCodeModule } from './components/app-code/app.code.component';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigComponent } from './app.config.component';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MenusComponent } from './components/menus/menus.component';
import { PaymentComponent} from './components/menus/payment.component';
import { ConfirmationComponent } from './components/menus/confirmation.component';
import { PersonalComponent } from './components/menus/personal.component';
import { SeatComponent } from './components/menus/seat.component';

import { CountryService } from './service/countryservice';
import { CustomerService } from './service/customerservice';
import { EventService } from './service/eventservice';
import { IconService } from './service/iconservice';
import { NodeService } from './service/nodeservice';
import { PhotoService } from './service/photoservice';
import { ProductService } from './service/productservice';
import { MenuService } from './service/app.menu.service';
import { ConfigService } from './service/app.config.service';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AccessComponent } from './components/access/access.component';
import { HolidayService } from './service/holiday.service';
import { LoaderService } from './components/common/loader';
import { AuthenticationService } from './service/security/Authentication.service';
import { DateTimeService } from './service/datetime.service';
import { UserService } from './service/user.service';
import { HolidaysHomeComponent } from './components/list-holidays/list.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SynthesisDetailYearComponent } from './components/synthesis-detail-year/synthesis-detail-year.component';
import { SynthesisDetailComponent } from './components/synthesis-detail/synthesis-detail.component';
import { HolidayValidComponent } from './components/holiday-valid-form/holiday-valid.component';
import { SynthesisEditFormComponent } from './components/synthesis-edit-form/synthesis-edit-form.component';
import { HolidaysSynthesisComponent } from './components/synthesis/synthesis.component';
import { NewPasswordComponent } from './components/new-password/new-password.component';
//import { HolidaysModule } from './components/holidays/holidays.module';
//import { HolidaysModule } from './components/holidays/holidays.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipsModule,
        ChipModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        GalleriaModule,
        ImageModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TagModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TerminalModule,
        TieredMenuModule,
        TimelineModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeSelectModule,
        TreeTableModule,
        VirtualScrollerModule,
        AppCodeModule,
        StyleClassModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppConfigComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        DashboardComponent,
        MenusComponent,
        PaymentComponent,
        ConfirmationComponent,
        PersonalComponent,
        SeatComponent,
        LoginComponent,
        ErrorComponent,
        NotfoundComponent,
        AccessComponent,
        HolidaysHomeComponent,
        EditFormComponent,
        UserListComponent,
        UserProfileComponent,
        HolidaysHomeComponent, HolidaysSynthesisComponent, SynthesisEditFormComponent , HolidayValidComponent, SynthesisDetailComponent, SynthesisDetailYearComponent,
        NewPasswordComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,MessageService,ConfirmationService,
        PhotoService, ProductService, MenuService, ConfigService,HolidayService,LoaderService,AuthenticationService,DateTimeService,UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
