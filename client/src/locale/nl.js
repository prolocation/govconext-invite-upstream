const nl = {
    code: "NL",
    name: "Nederlands",
    select_locale: "Wissel taal naar Nederlands",
    landing: {
        header: {
            title: "Toegang tot je applicaties",
            login: "Login",
            sup: "SURFconext Invite is alleen op uitnodiging.",
        },
        works: "Hoe werkt het?",
        adminFunction: "adminfunctie",
        info: [
            //Arrays of titles and info blocks and if a function is an admin function
            ["Uitnodigen", "<p>Instellingsbeheerders kunnen rollen aanmaken voor hun applicaties.</p>" +
            "<p>Applicaties zijn diensten gekoppeld aan SURFconext.</p>", true],
            ["Rollen", "<p>De applicatiebeheerders nodigen collega's die weer gasten kunnen uitnodigen.</p>" +
            "<p>Uitnodigingen.</p>", true],
            ["Word lid", "<p>Uitgenodigde collega's die op de uitnodiging zijn ingegaan krijgen toegang tot applicaties.</p><br/>", false],
            ["Groepen", "<p>De rollen zijn feitelijk groepslidmaatschappen die gebruikt kunnen worden in SURFconext autorisatieregels, doorgegeven als attributen of via externe SCIM API's.</p>", false]
        ],
        footer: "<p>SURFconext Invite is een dienst voor toegangsbeheer voor onderwijs en onderzoek.</p>" +
            "<p>Meer weten? <a href='https://support.surfconext.nl/invite'>Lees verder</a>.</p>",
    },
    header: {
        title: "SURFconext Invite",
        subTitle: "Alles gaat uilstekend",
        links: {
            login: "Login",
            system: "Systeem",
            switchApp: "Ga naar {{app}}",
            welcome: "Welcome",
            access: "Invite",
            help: "Help",
            profile: "Profiel",
            logout: "Log uit",
            helpUrl: "https://support.surfconext.nl/help-invite-nl"
        },
    },
    tabs: {
        home: "Home",
        applications: "Applicaties",
        users: "Gebruikers",
        maintainers: "Rol managers en uitnodigers",
        guests: "Gasten met deze rol",
        invitations: "Uitnodigingen",
        roles: "Toegangsrollen",
        profile: "Profiel",
        userRoles: "Rol managers en uitnodigers",
        guestRoles: "Gasten",
        cron: "Cron",
        invite: "Uitnodiging"
    },
    home: {
        access: "SURFconext Invite",
    },
    impersonate: {
        exit: "Stop na-apen",
        impersonator: "Je doet je voor als <strong>{{name}}</strong> | <strong>{{role}}</strong>",
        impersonatorTooltip: "Je bent in werkelijkheid <em>{{impersonator}}</em>, maar je doet je voor als <em>{{currentUser}}</em>.",
        flash: {
            startedImpersonation: "Je doet je voor als {{name}}.",
            clearedImpersonation: "Na-apen opgeheven. Je bent weer jezelf."
        },
    },
    access: {
        SUPER_USER: "Super User",
        INSTITUTION_ADMIN: "Instellings manager",
        MANAGER: "Manager",
        INVITER: "Uitnodiger",
        GUEST: "Gast",
        "No member": "Geen lid"
    },
    users: {
        found: "{{count}} {{plural}} gevonden",
        moreResults: "Er zijn meer resultaten dan getoond kunnen worden, vereng je zoekopdracht.",
        applicationsSearchPlaceHolder: "Zoek applicaties...",
        name_email: "Naam / e-mail",
        name: "Naam",
        email: "E-mail",
        highestAuthority: "Rol",
        schacHomeOrganization: "Instelling",
        lastActivity: "Laatst actief",
        eduPersonPrincipalName: "EPPN",
        sub: "Sub",
        singleUser: "gebruiker",
        multipleUsers: "gebruikers",
        noEntities: "Geen gebruikers gevonden",
        new: "Nieuwe uitnodiging",
        title: "Gebruikers",
        roles: "Rollen",
        applications: "Applicaties",
        noRolesInfo: "Je hebt geen rollen (je bent een super-user)",
        noRolesInstitutionAdmin: "Als een instellingsmanager heb je geen rollen (maar je hebt wel toegang tot je applicaties)",
        guestRoleOnly: "Je bent een gast gebruiker. Was je op zoek naar <a href='{{welcomeUrl}}'>de inviter app voor gasten</a>?",
        rolesInfo: "Je hebt de volgende rollen",
        applicationsInfo: "Je hebt toegang tot de volgende applicaties",
        noRolesFound: "Geen rollen gevonden.",
        noApplicationsFound: "geen applicaties gevonden.",
        rolesInfoOther: "{{name}} heeft de volgende rollen",
        applicationsInfoOther: "{{name}} heeft toegang tot de volgende applicaties",
        landingPage: "Landingspagina",
        access: "Access",
        organisation: "Aanbieder",
        noResults: "Geen gebruikers gevonden",
        searchPlaceHolder: "Zoek gebruikers...",
        authority: "Autoriteit",
        endDate: "Einddatum",
        expiryDays: "Verloopdagen"
    },
    role: {
        copyUrn: "Copy urn",
        userInfo: "{{nbr}} leden  &  Valide voor {{valid}} dagen",
        roleInfo: "Rol valide voor <strong>{{days}} dagen</strong>",
        roleInfoNoEndDate: "Rol heeft <strong>geen einddatum</strong>",
        contactAdmin: "Contact manager(s)"
    },
    roles: {
        title: "Toegangsrollen",
        applicationName: "Applicatie",
        roleDetails: "Rol details",
        invitationDetails: "Uitnodiging details",
        accessRole: "Naam",
        name: "Naam",
        namePlaceHolder: "Naam van de rol",
        shortName: "Korte naam",
        landingPage: "Landingspagina",
        userRoleCount: "# Gebruikers",
        landingPagePlaceHolder: "https://landingspagina.nl",
        defaultExpiryDays: "Verloopdagen",
        endDate: "Einddatum",
        noEndDate: "Geen einddatum",
        authority: "Autoriteit",
        yourRole: "Jouw rol",
        description: "Omschrijving",
        descriptionPlaceHolder: "Omschrijving van het doel van de rol",
        noResults: "Geen rollen gevonden",
        noMember: "Geen lid",
        searchPlaceHolder: "Zoek rollen...",
        found: "{{count}} {{plural}} gevonden",
        singleRole: "rol",
        multipleRoles: "rollen",
        new: "Rol toevoegen",
        edit: "Bewerk rol {{name}}",
        urn: "URN",
        advanced: "Advanced settings",
        showAdvancedSettings: "Toon geadvanceerde uitnodiging instellingen",
        hideAdvancedSettings: "Verberg geadvanceerde uitnodiging instellingen",
        override: "Kunnen de instellingen worden veranderd bij een uitnodiging?",
        manage: "Dienst",
        manageMetaData: "Entity",
        provisioning: "Provisioning",
        deleteFlash: "Rol {{name}} is verwijderd",
        deleteConfirmation: "Weet je zeker dat je deze rol wilt verwijderen?",
        createFlash: "Rol {{name}} is aangemaakt",
        updateFlash: "Rol {{name}} is bijgewerkt",
    },
    applications: {
        searchPlaceHolder: "Zoek rollen"
    },
    userRoles: {
        found: "{{count}} {{plural}} gevonden",
        singleUserRole: "gebruikersrol",
        multipleUserRoles: "gebruikersrollen",
        searchPlaceHolder: "Zoek gebruikersrollen...",
        noResults: "Geen gebruikersrollen gevonden",
        guestRoles: "{{count}} gast gebruiker",
        managerRoles: "{{count}} managers & uitnodigers",
        notAllowed: "Je kunt deze gebruikersrol niet verwijderen vanwege ontbrekende rollen",
        updateConfirmation: "Weet je zeker dat je de einddatum wilt aanpassen van rol {{roleName}} voor {{userName}}",
        updateConfirmationRemoveEndDate: "Weet je zeker dat je de einddatum wilt verwijderen van rol {{roleName}} voor {{userName}}",
        updateFlash: "De einddatum is bijgewerkt van rol {{roleName}}",
        deleteConfirmation: "Weet je zeker dat je de rol wilt verwijderen van deze gebruiker(s)?",
        deleteFlash: "Gebruikersrol(len) zijn verwijderd",
        createdAt: "Geaccepteerd op",
    },
    invitations: {
        found: "{{count}} {{plural}} gevonden",
        singleInvitation: "uitnodiging",
        multipleInvitations: "uitnodigingen",
        searchPlaceHolder: "Zoek uitnodiging...",
        noResults: "Geen uitnodigingen gevonden",
        inviter: "Uitnodiger",
        status: "Status",
        open: "Open",
        accepted: "Geaccepteerd",
        expired: "Verlopen",
        enforceEmailEquality: "E-mailadres moet overeenkomen",
        eduIDOnly: "Uitsluitend voor eduID",
        new: "Nodig manager of uitnodiger uit",
        newInvite: "Nieuwe uitnodiging",
        newGuest: "Gast uitnodigen",
        invitees: "Genodigden",
        intendedRoles: "Rollen",
        inviteesPlaceholder: "E-mailadressen genodigden",
        requiredEmail: "Geef minimaal 1 e-mailadres op",
        requiredRole: "Minimaal 1 rol is benodigd voor een uitnodiging",
        intendedAuthority: "Autoriteit",
        roles: "Rollen",
        inviterRoles: "Verstuur een nieuwe uitnodiging voor de volgende rollen",
        rolesPlaceHolder: "Kies een of meer rollen",
        expiryDate: "Verloopdatum uitnodiging",
        roleExpiryDate: "Verloopdatum rol",
        createdAt: "Verstuurd",
        message: "Bericht",
        messagePlaceholder: "Persoonlijk bericht voor de genodigde dat wordt opgenomen in de uitnodiging",
        invite: "Stuur uitnodiging",
        invalidEmails: "Ongeldig e-mailadres verwijderd: {{emails}}.",
        createFlash: "Uitnodiging is verstuurd",
        delete: "Verwijder",
        resend: "Stuur opnieuw",
        notAllowed: "Je kunt deze uitnodiging niet opnieuw versturen of verwijderen vanwege ontbrekende rollen",
        deleteFlash: "Uitnodiging(en) verwijderd",
        deleteConfirmation: "Weet je zeker dat je deze uitnodiging(en) wilt verwijderen?",
        resendConfirmation: "Weet je zeker dat je deze uitnodigingen opnieuw wilt versturen?",
        resendFlash: "Uitnodiging(en) opnieuw verstuurd.",
        statuses: {
            all: "All ({{nbr}})",
            open: "Open",
            accepted: "Accepted"
        }
    },
    forms: {
        none: "Geen",
        notApplicable: "n.v.t.",
        you: "Jijzelf",
        yes: "Ja",
        no: "Nee",
        ok: "Ok",
        or: "of ",
        edit: "Bewerken",
        cancel: "Annuleren",
        save: "Opslaan",
        and: "en",
        more: "Meer",
        less: "Minder",
        alreadyExists: "Het {{attribute}} '{{value}}' bestaat al",
        alreadyExistsParent: "Het {{attribute}} {{value}} bestaat al binnen {{parent}}",
        required: "{{attribute}} is verplicht",
        invalid: "De waarde '{{value}}' is niet geldig voor {{attribute}}",
        error: "Je kunt contact opnemen met <a href=\"mailto:support@surfconext.nl\">SURFconext Invite</a>.<br/><br/>" +
            "De foutmeldingscode is {{reference}}."
    },
    profile: {
        info: "Het account van {{name}} is aangemaakt op {{createdAt}}",
        your: "Je account is aangemaakt op {{createdAt}}"
    },
    inviteOnly: {
        welcome: "Welkom bij SURFconext Invite",
        roles: "Je hebt nog geen rollen.",
        info: "SURFconext Invite is op uitnodiging. Heb je hierover vragen? <a href='mailto:support@surfconext.nl'>Neem contact op</a>.",
        preLogin: "Of ",
        login: "login",
        postLogin: " via een andere instelling",
    },
    missingAttributes: {
        welcome: "Welkom bij SURFconext Invite",
        attributes: "Je instelling gaf niet alle benodigde attributen vrij. De volgende ontbreken:",
        info: "Hulp nodig? Neem <a href='mailto:support@surfconext.nl'>contact met ons op</a>.",
        preLogin: "Of ",
        login: "login",
        postLogin: " via een andere instelling",
    },
    invitationAccept: {
        hi: "Hoi{{name}},",
        nextStep: "Volgende: veel plezier met je nieuwe rol",
        expired: "Deze uitnodiging is verlopen op {{expiryDate}}",
        expiredInfo: "Neem contact op met degene die je uitnodigde en vraag hen je een nieuwe uitnodiging te sturen.",
        invited: "Uitgenodigd voor {{plural}} {{roles}} door {{inviter}}.",
        invitedNoRoles: "Je bent uitgenodigt door {{inviter}} om {{authority}} te worden.",
        enforceEmailEquality: " Deze uitnodiging kan alleen geaccepteerd worden door <strong>{{email}}</strong>.",
        role: "rol",
        roles: "rollen",
        progress: "1",
        info: "SURFconext Invite geeft toegang tot applicaties op basis van je rol.",
        infoLogin: "Je kunt inloggen met je instellings-account of eduID.",
        infoLoginEduIDOnly: "Je moet inloggen met eduID.",
        infoLoginAgain: "Om de uitnodiging te accepteren moet je opnieuw inloggen.",
        login: "Login",
        loginWithSub: "Login",
        emailMismatch: "De uitnodiger heeft aangegeven dat je de uitnodiging dient te accepteren met e-mailadres {{email}}, " +
            "maar je bent ingelogd met een account met een ander mailadres. Log opnieuw in met een ander account."
    },
    inviter: {
        welcome: "Welcome, {{name}}",
        info: "Manage who gets access to the <strong>educational applications</strong> at <strong>your institution</strong>.",
        sendInvite: "Send new invite",
        viewHistory: "view history",
        manage: "You can manage guests and send inviter for",
        details: "Show details",
        history: "Uitnodigingen"
    },
    institutionAdmin: {
        welcome: "Welkom Instellings admin van {{name}}! Je kan nu je eerste rol aanmaken en managers daarvoor uitnodigen.",
        create: "Create access role"
    },
    tooltips: {
        userIcon: "Gebruiker {{name}} geprovisioned op {{createdAt}} laatst actief op {{lastActivity}}",
        impersonateIcon: "Doe gebruiker {{name}} na",
        roleIcon: "Rol {{name}} aangemaakt op {{createdAt}}",
        userRoleIcon: "Gebruikersrol geaccepteerd door {{name}} op {{createdAt}}",
        invitationIcon: "Uitnodiging aan {{email}} verstuurd op {{createdAt}} met verloopdatum {{expiryDate}}",
        roleShortName: "Een unieke korte naam voor de rol binnen een provisioning. Gebruikt in de urn, dus daarom zijn niet alle tekens toegestaan.",
        roleUrn: "De urn van deze rol. Deze is gebaseerd op de opgeschoonde naam en de applicatie-identifier. Hij wordt gebruikt als de unieke globale identifier van deze rol en daarom zijn niet alle tekens toegestaan.",
        manageService: "De vereiste dienst uit SURFconext die optioneel een provisioning heeft.",
        defaultExpiryDays: "Het default aantal dagen waarna de rol verloopt, gerekend vanaf het moment dat de gebruiker de uitnodiging voor de rol accepteert.",
        enforceEmailEqualityTooltip: "Indien ingeschakeld moet de genodigde de uitnodiging accepteren met een account dat hetzelfde e-mailadres voert als waarheen deze uitnodiging gestuurd is",
        eduIDOnlyTooltip: "Indien ingeschakeld moeten de genodigden eduID gebruiken om in te loggen bij het accepteren",
        roleExpiryDateTooltip: "De einddatum van deze rol. Na deze datum wordt de rol verwijderd bij de gebruiker.",
        expiryDateTooltip: "De datum waarop deze uitnodiging verloopt",
        rolesTooltip: "Alle rollen die de genodigden verkrijgen na het accepteren van de uitnodiging",
        intendedAuthorityTooltip: "De autoriteit geeft de rechten aan die de genodigde verwerft na het accepteren van de uitnodiging",
        inviteesTooltip: "Geef e-mailadressen op, gescheiden door komma, spaties of puntkomma, of een voor een met gebruik van de enter-toets. Je kunt ook een csv-bestand plakken met daarin op elke regel een e-mailadres.",
        removeInvitation: "Verwijder al de geselecteerde uitnodigingen",
        resendInvitation: "Stuur al de geselecteerde uitnodigingen opnieuw",
        inviter: "Send invitations to persons who will - once accepted - become guest users for the application",
        overrideSettingsAllowed: "If checked then invitations for this role can't override the advanced setting (e.g. Email equality, eduID only and the role expiry end date)"
    },
    confirmationDialog: {
        title: "Bevestig",
        error: "Fout",
        subTitle: "Deze actie vereist bevestiging",
        subTitleError: "Er is een fout opgetreden",
        confirm: "Bevestig",
        ok: "OK",
        cancel: "Annuleer",
    },
    footer: {
        terms: "Gebruiksvoorwaarden",
        termsLink: "https://support.surfconext.nl/terms-nl",
        privacy: "Privacybeleid",
        privacyLink: "https://support.surfconext.nl/privacy-nl",
        surfLink: "https://surf.nl",
    },
    expirations: {
        expires: "Verloopt {{relativeTime}}",
        expired: "Verlopen {{relativeTime}}",
        never: "Verloopt niet",
        activity: {
            now: "Zojuist",
            seconds: "Vandaag",
            minute: "Vandaag",
            minutes: "Vandaag",
            hour: "Vandaag",
            hours: "Vandaag",
            day: "Gisteren",
            days: "Deze week",
            week: "Deze week",
            weeks: "Deze maand",
            month: "Vorige maand",
            months: "%s maanden geleden",
            year: "1 jaar geleden",
            years: "%s jaar geleden"
        },
        ago: {
            now: "zojuist",
            seconds: "%s seconden geleden",
            minute: "1 minuut geleden",
            minutes: "%s minuten geleden",
            hour: "1 uur geleden",
            hours: "%s uren geleden",
            day: "1 dag geleden",
            days: "%s dagen geleden",
            week: "1 week geleden",
            weeks: "%s weken geleden",
            month: "1 maand geleden",
            months: "%s maanden geleden",
            year: "1 jaar geleden",
            years: "%s jaren geleden"
        },
        in: {
            now: "zojuist",
            seconds: "over %s seconden",
            minute: "over 1 minuut",
            minutes: "over %s minuten",
            hour: "over 1 uur",
            hours: "over %s uur",
            day: "over 1 dag",
            days: "over %s dagen",
            week: "over 1 week",
            weeks: "over %s weken",
            month: "over 1 maand",
            months: "over %s maanden",
            year: "over 1 jaar",
            years: "over %s jaar"
        }
    },
    notFound: {
        alt: "404 Pagina niet gevonden"
    },
    system: {
        trigger: "Trigger",
        clear: "Clear",
        cronInfo: "Roep de cron job aan die resources opruimt zoals verlopen gebruikersrollen, verweesde gebruikers en inactieve gebruikers"
    }
}

export default nl;
