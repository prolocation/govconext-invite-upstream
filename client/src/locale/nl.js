const nl = {
    code: "NL",
    name: "Nederlands",
    select_locale: "Wissel taal naar Nederlands",
    languages: {
        language: "Taal",
        languageTooltip: "Kies de taal van de uitnodigingse-mail",
        en: "Engels",
        nl: "Nederlands",
    },
    landing: {
        header: {
            title: "Toegang tot je applicaties",
            login: "Inloggen",
            sup: "govconext Invite is alleen op uitnodiging te gebruiken.",
        },
        works: "Hoe werkt het?",
        adminFunction: "beheerfunctie",
        info: [
            //Arrays of titles and info blocks and if a function is an admin function
            ["Uitnodigen", "<p>organisatiebeheerders kunnen rollen aanmaken voor hun applicaties.</p>" +
            "<p>Applicaties zijn aan govconext gekoppelde diensten.</p>", true],
            ["Rollen", "<p>Applicatiebeheerders nodigen collega's uit die op hun beurt gebruikers kunnen uitnodigen.</p>", true],
            ["Word lid", "<p>Uitgenodigde collega's die op de uitnodiging zijn ingegaan, krijgen toegang tot applicaties.</p><br/>", false],
            ["Groepen", "<p>De rollen zijn eigenlijk groepslidmaatschappen die gebruikt kunnen worden in govconext-autorisatieregels, doorgegeven als attributen of via externe SCIM API's.</p>", false]
        ],
        footer: "<p>govconext Invite biedt toegangsbeheer voor onderwijs en onderzoek.</p>" +
            "<p>Meer weten? <a href='https://wiki.support.govroam.nl/wiki/spaces/govconext/overview'>Lees verder</a>.</p>",
    },
    header: {
        title: "govconext Invite",
        subTitle: "Alles gaat uilstekend",
        links: {
            login: "Inloggen",
            system: "Systeem",
            switchApp: "Ga naar {{app}}",
            welcome: "Welcome",
            access: "Invite",
            help: "Help",
            profile: "Profiel",
            logout: "Uitloggen"
        },
    },
    tabs: {
        home: "Home",
        applications: "Applicaties",
        users: "Gebruikers",
        applicationUsers: "Gebruikers",
        maintainers: "Rolmanagers & uitnodigers",
        guests: "Gebruikers met deze rol",
        invitations: "Uitnodigingen",
        roles: "Toegangsrollen",
        profile: "Profiel",
        userRoles: "Rolmanagers & uitnodigers",
        guestRoles: "Gebruikers",
        cron: "Cron",
        invite: "Uitnodiging",
        tokens: "API-tokens",
        unknownRoles: "Missing applications",
        expiredUserRoles: "User role expirations",
        pendingInvitations: "Open",
        allPendingInvitations: "Open uitnodigingen",
        acceptedInvitations: "Geaccepteerd"
    },
    home: {
        access: "govconext Invite",
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
        INSTITUTION_ADMIN: "organisatiemanager",
        MANAGER: "Manager",
        INVITER: "Uitnodiger",
        GUEST: "Gebruiker",
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
        schacHomeOrganization: "Organisatie",
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
        noRolesInstitutionAdmin: "Je bent organisatiemanager, maar hebt nog geen rollen (maar je hebt wel toegang tot je applicaties)",
        noRolesNoApplicationsInstitutionAdmin: "Je bent organisatiemanager, maar je hebt geen rollen en je organisatie heeft blijkbaar ook geen toegang tot applicaties.",
        guestRoleOnly: "Je bent geen admin. Ben je op zoek naar de <a href='{{welcomeUrl}}'>applicaties waar je toegang to hebt</a>?",
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
        expiryDays: "Verloopdagen",
        roleExpiryTooltip: "Sorteer op rollen, om te zien welke rol het eerst zal verlopen"
    },
    role: {
        copyUrn: "Copy urn",
        userInfo: "{{nbr}} leden & geldig voor {{valid}} dagen",
        roleInfo: "Rol geldig voor <strong>{{days}} dagen</strong>",
        roleInfoNoEndDate: "Rol heeft <strong>geen einddatum</strong>",
        contactAdmin: "Contact manager(s)"
    },
    roles: {
        title: "Toegangsrollen",
        applicationName: "Applicatie",
        roleDetails: "Details rol",
        invitationDetails: "Details uitnodiging",
        applicationDetails: "Applicatie(s) voor deze rol",
        addApplication: "Applicatie toevoegen",
        multiple: "Meerdere applicaties",
        applicationPlaceholder: "Kies een applicatie...",
        accessRole: "Naam",
        name: "Naam",
        namePlaceHolder: "Naam van de rol",
        shortName: "Korte naam",
        landingPage: "(Aangepaste) landingspagina",
        userRoleCount: "# Gebruikers",
        landingPagePlaceHolder: "https://landingspagina.nl",
        defaultExpiryDays: "Verloopdagen",
        endDate: "Einddatum",
        noEndDate: "-",
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
        showAdvancedSettings: "Toon geavanceerde configuratie uitnodiging",
        hideAdvancedSettings: "Verberg geavanceerde configuratie uitnodiging",
        override: "Kan de configuratie worden aangepast bij uitnodigen?",
        manage: "Applicatie",
        manageMetaData: "govconext entity",
        provisioning: "Provisioning",
        deleteFlash: "Rol {{name}} is verwijderd",
        deleteConfirmation: "Weet je zeker dat je deze rol wil verwijderen?",
        createFlash: "Rol {{name}} is aangemaakt",
        updateFlash: "Rol {{name}} is bijgewerkt",
        unknownInManage: "Onbekend in Manage",
        unknownInManageToolTip: "De applicatie voor deze rol is verwijderd in de govconext backend. Neem contact op met <a href=\"mailto:ondersteuning@govroam.nl\">ondersteuning@govroam.nl</a> om dit op te lossen.",
        unknownInManageDisabled: "De applicatie voor deze rol is verwijderd in de govconext backend. Daarom kan je geen nieuwe gebruikers uitnodigen. Neem contact op met <a href=\"mailto:ondersteuning@govroam.nl\">ondersteuning@govroam.nl</a> om dit op te lossen.",
        consequences: {
            info: "De volgende gebruikers verliezen toegang tot deze rol:",
            userInfo: "{{name}} ({{authority}}), laatste activiteit {{lastActivity}}",
            andMore: "En nog {{nbr}} meer.. Bekijk de lijst van huidige gebruikers voor meer details."
        }
    },
    applications: {
        title: "Toegangsrollen voor deze applicatie",
        applicationFound: "Applicaties ({{nbr}})",
        new: "Nieuwe toegangsrol",
        searchPlaceHolder: "Zoek naar applicaties",
        noResults: "Geen applicaties gevonden...",
        name: "Applicatienaam",
        types: {
            saml20_sp: "Service Provider",
            oidc10_rp: "Relying Party"
        },
        type: "Type",
        organization: "Organisatie",
        url: "URL",
        roles: "Rollen",
        provisionings: "Provisionings",
        accessRole: "Toegangsrol",
    },
    applicationRoles: {
        searchPlaceHolder: "Zoek naar Access Rollen",
        noEntities: "Geen access rollen gevonden",
    },
    userRoles: {
        found: "{{count}} {{plural}} gevonden",
        singleUserRole: "gebruikersrol",
        multipleUserRoles: "gebruikersrollen",
        searchPlaceHolder: "Zoek gebruikers...",
        noResults: "Geen gebruikersrollen gevonden",
        guestRoles: "{{count}} gebruikers",
        managerRoles: "{{count}} managers & uitnodigers",
        notAllowed: "Je kunt deze gebruikersrol niet verwijderen vanwege ontbrekende rollen",
        updateConfirmation: "Weet je zeker dat je de einddatum wil aanpassen van rol {{roleName}} voor {{userName}}",
        updateConfirmationRemoveEndDate: "Weet je zeker dat je de einddatum wil verwijderen van rol {{roleName}} voor {{userName}}",
        updateFlash: "De einddatum van rol {{roleName}} is bijgewerkt",
        deleteConfirmation: "Weet je zeker dat je de rol van deze gebruiker(s) wil verwijderen?",
        deleteFlash: "Gebruikersrol(len) zijn verwijderd",
        createdAt: "Datum geaccepteerd",
        delete: "Verwijder"
    },
    invitations: {
        found: "{{count}} {{plural}} gevonden",
        foundWithStatus: "{{count}} {{status}} {{plural}}",
        singleInvitation: "uitnodiging",
        multipleInvitations: "uitnodigingen",
        searchPlaceHolder: "Zoek uitnodiging...",
        noResults: "Geen uitnodigingen gevonden",
        inviter: "Uitgenodigd door",
        status: "Status",
        pending: "open",
        open: "Open",
        accepted: "Geaccepteerd",
        expired: "Verlopen",
        enforceEmailEquality: "E-mailadres moet overeenkomen",
        eduIDOnly: "Uitsluitend eduID",
        new: "Nodig manager of uitnodiger uit",
        newInvitation: "Nodig uitnodiger uit",
        newInvite: "Nieuwe uitnodiging",
        newGuest: "Gebruiker uitnodigen",
        invitees: "Genodigden",
        intendedRoles: "Rollen",
        inviteesPlaceholder: "E-mailadressen genodigden",
        requiredEmail: "Geef minimaal 1 e-mailadres op",
        requiredRole: "Minimaal 1 rol is benodigd voor een uitnodiging",
        intendedAuthority: "Autoriteit",
        roles: "Rollen",
        inviterRoles: "Selecteer de rollen voor de nieuwe uitnodiging",
        rolesPlaceHolder: "Kies een of meer rollen",
        expiryDate: "Uitnodiging geldig tot",
        acceptedAt: "Datum geaccepteeerd",
        roleExpiryDate: "Verloopdatum rol",
        roleExpiryDateQuestion: "Zet een specifieke verloopdatum voor de rol",
        roleExpiryDateInfo: "Deze rol wordt verwijderd van de gebruiker {{expiry}}",
        expiryDateQuestion: "Zet een specifieke verloopdatum voor de uitnodiging",
        expiryDateInfo: "Standaard verloopt een uitnodiging na 1 maand",
        withinThreeMonths: "Binnen 1 maand",
        createdAt: "Verstuurd",
        message: "Persoonlijk bericht",
        messagePlaceholder: "Voeg een persoonlijk bericht toe aan de uitnodiging",
        invite: "Stuur uitnodiging",
        guestRoleIncluded: "Voeg toe als gebruiker?",
        invalidEmails: "Ongeldig e-mailadres verwijderd: {{emails}}.",
        createFlash: "Uitnodiging is verstuurd",
        delete: "Intrekken",
        resend: "Stuur opnieuw",
        notAllowed: "Je kunt deze uitnodiging niet opnieuw versturen of intrekken vanwege ontbrekende rollen",
        deleteFlash: "Uitnodiging(en) ingetrokken",
        deleteConfirmation: "Weet je zeker dat je deze uitnodiging(en) wil intrekken?",
        resendConfirmation: "Weet je zeker dat je deze uitnodiging(en) opnieuw wil versturen?",
        resendFlash: "Uitnodiging(en) opnieuw verstuurd.",
        inviterRole: {
            title: "Verstuur nieuwe uitnodiging",
            roles: "Voor de volgende rollen",
            to: "Naar",
            message: "Persoonlijke bericht",
            settings: "Geavanceerde configuratie uitnodiging"
        },
        statuses: {
            all: "Alle ({{nbr}})",
            open: "Open",
            accepted: "Geaccepteerd",
            expired: "Verlopen",
            mine: "Mijn"
        }
    },
    forms: {
        none: "Geen",
        notApplicable: "n.v.t.",
        you: "Jijzelf",
        yes: "Ja",
        no: "Nee",
        ok: "Oké",
        or: "of ",
        edit: "Bewerken",
        cancel: "Annuleren",
        save: "Opslaan",
        specificDate: "Zet specifieke datum",
        and: "en",
        more: "Meer",
        less: "Minder",
        alreadyExists: "Het {{attribute}} '{{value}}' bestaat al",
        alreadyExistsParent: "Het {{attribute}} {{value}} bestaat al binnen {{parent}}",
        required: "{{attribute}} is verplicht",
        invalid: "De waarde '{{value}}' is niet geldig voor {{attribute}}",
        error: "Je kunt contact opnemen met <a href=\"mailto:ondersteuning@govroam.nl?subject=Error govconext Invite referentie code {{reference}}\">ondersteuning@govroam.nl</a> voor hulp.<br/><br/>" +
            "De foutcode is {{reference}}."
    },
    profile: {
        info: "Het account van {{name}} is aangemaakt op {{createdAt}}",
        your: "Je account is aangemaakt op {{createdAt}}"
    },
    inviteOnly: {
        welcome: "Welkom bij govconext Invite",
        roles: "Je hebt nog geen rollen.",
        info: "govconext Invite is op uitnodiging. Neem bij vragen contact op met <a href='mailto:ondersteuning@govroam.nl'>ondersteuning@govroam.nl</a>.",
        preLogin: "Of ",
        login: "login",
        postLogin: " via een andere instelling",
    },
    missingAttributes: {
        welcome: "Welkom bij govconext Invite",
        attributes: "Je organisatie gaf niet alle benodigde attributen vrij. De volgende ontbreken:",
        info: "Hulp nodig? Neem <a href='mailto:ondersteuning@govroam.nl'>contact met ons op</a>.",
        preLogin: "Of ",
        login: "login",
        postLogin: " via een andere instelling",
        sub: "sub",
        email: "email",
        givenName: "voornaam",
        familyName: "achternaam",
        schacHomeOrganization: "schacHomeOrganisatie"
    },
    invitationAccept: {
        hi: "Hoi{{name}},",
        nextStep: "Volgende: veel plezier met deze rol",
        expired: "Deze uitnodiging is verlopen op {{expiryDate}}",
        expiredInfo: "Neem contact op met <a href='mailto:{{email}}'>{{email}}</a> en vraag om een nieuwe uitnodiging te sturen.",
        invited: "Je bent uitgenodigd voor {{plural}} {{roles}} door {{inviter}} om {{authority}} te worden.",
        invitedNoRoles: "Je bent uitgenodigd door {{inviter}} om {{authority}} te worden.",
        enforceEmailEquality: " Deze uitnodiging kan alleen geaccepteerd worden door <strong>{{email}}</strong>.",
        role: "rol",
        roles: "rollen",
        progress: "1",
        info: "govconext Invite geeft toegang tot applicaties op basis van je rol.",
        infoLogin: "Je kunt inloggen met je organisatie-account of govID.",
        infoLoginEduIDOnly: "Je moet inloggen met govID.",
        infoLoginAgain: "Om de uitnodiging te accepteren moet je opnieuw inloggen.",
        login: "Inloggen",
        loginWithSub: "Inloggen",
        emailMismatch: "De uitnodiger heeft aangegeven dat je de uitnodiging dient te accepteren met e-mailadres {{email}}, " +
            "maar je bent ingelogd met een account met een ander e-mailadres. Log opnieuw in met een ander account."
    },
    inviter: {
        welcome: "Welkom, {{name}}",
        info: "Manage wie toegang krijgt tot <strong>onderwijsapplicaties</strong> bij <strong>jouw instelling</strong>.",
        sendInvite: "Verstuur een uitnodiging",
        viewHistory: "toon geschiedenis",
        manage: "Je kunt gebruikers beheren en uitnodigingen versturen voor",
        details: "Toon details",
        history: "Geschiedenis van uitnodigingen"
    },
    institutionAdmin: {
        welcome: "Welkom organisatieadmin van {{name}}! Je kan nu je eerste rol aanmaken en managers daarvoor uitnodigen.",
        create: "Rol aanmaken"
    },
    tokens: {
        title: "API-tokens",
        new: "API-token toevoegen",
        searchPlaceHolder: "Zoek naar API-tokens...",
        noEntities: "Geen API-tokens",
        titleNew: "Maak een API-token aan voor {{institutions}}",
        backToOverview: "Terug naar alle API-tokens",
        createdAt: "Aangemaakt op",
        secretDisclaimer: "Je kan het API-token maar één keer zien. Kopieer het en bewaar het ergens veilig.<br><br>Als je het token kwijtraakt, verwijder het dan en maak een nieuwe aan.",
        secret: "API-token",
        secretValue: "One-way hashed token",
        secretTooltip: "De waarde die je gebruikt in de X-API-TOKEN header",
        description: "Omschrijving",
        descriptionPlaceHolder: "Omschrijving voor dit API-token",
        descriptionTooltip: "Een omschrijving die de reden voor dit API-token omschrijft",
        deleteFlash: "API-token is verwijderd",
        deleteConfirmation: "Weet je zeker dat je dit API-token wil verwijderen?",
        createFlash: "API-token is aangemaakt",
        submit: "Opslaan",
        required: "Een omschrijving is verplicht voor een API-token",
    },
    tooltips: {
        userIcon: "Gebruiker {{name}} geprovisiond op {{createdAt}}, laatst actief op {{lastActivity}}",
        impersonateIcon: "Doe gebruiker {{name}} na",
        roleIcon: "Rol {{name}} aangemaakt op {{createdAt}}",
        userRoleIcon: "Gebruikersrol geaccepteerd door {{name}} op {{createdAt}}",
        invitationIcon: "Uitnodiging aan {{email}} verstuurd op {{createdAt}} met verloopdatum {{expiryDate}}",
        roleShortName: "Een unieke korte naam voor de rol binnen een provisioning. Wordt gebruikt in de urn, daarom zijn niet alle tekens toegestaan.",
        roleUrn: "De urn van deze rol. Deze is gebaseerd op de opgeschoonde naam en de rol-identifier. Hij wordt gebruikt als de unieke globale identifier van deze rol en daarom zijn niet alle tekens toegestaan.",
        manageService: "De vereiste dienst uit govconext, die optioneel een provisioning heeft.",
        defaultExpiryDays: "Het standaardaantal dagen waarna de rol verloopt, gerekend vanaf het moment dat de gebruiker de uitnodiging voor de rol accepteert.",
        enforceEmailEqualityTooltip: "Indien ingeschakeld moet de genodigde de uitnodiging accepteren met een account dat hetzelfde e-mailadres voert als waarheen deze uitnodiging gestuurd is",
        eduIDOnlyTooltip: "Indien ingeschakeld moeten de genodigden govID gebruiken om in te loggen bij het accepteren",
        roleExpiryDateTooltip: "De einddatum van deze rol. Na deze datum wordt de rol verwijderd bij de gebruiker.",
        expiryDateTooltip: "De datum waarop deze uitnodiging verloopt",
        rolesTooltip: "Alle rollen die de genodigden verkrijgen na het accepteren van de uitnodiging",
        intendedAuthorityTooltip: "De autoriteit geeft de rechten aan die de genodigde verwerft na het accepteren van de uitnodiging",
        inviteesTooltip: "Geef e-mailadressen op, gescheiden door komma, spatie of puntkomma, of op een eigen regel. Je kunt ook een csv-bestand plakken met daarin op elke regel een e-mailadres.",
        removeInvitation: "Verwijder alle geselecteerde uitnodigingen",
        resendInvitation: "Verstuur al de geselecteerde uitnodigingen opnieuw",
        inviter: "Verstuur uitnodigingen naar gebruikers die - na accepteren - en rol krijgen voor de applicatie",
        overrideSettingsAllowed: "Indien ingeschakeld kunnen uitnodigingen voor de deze rol de geavanceerde configuratie aanpassen (waaronder of e-mailadres overeen moet komen, alleen accepteren met govID en de verloop- en einddatum)",
        removeUserRole: "Verwijder alle geselecteerde rollen",
        guestRoleIncludedTooltip: "Wil je dat de uitgenodigden ook gebruiker worden als ze de uitnodiging accepteren?",
        expiredUserRole: "Deze rol gaat verlopen binnen een maand",
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
        termsLink: "https://govroam.nl/aansluiten/voorwaarden/",
        privacy: "Privacybeleid",
        privacyLink: "https://govroam.nl/stichting-govroam/privacy/",
        surfLink: "https://govroam.nl",
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
            seconds: "na %s seconden",
            minute: "na 1 minuut",
            minutes: "na %s minuten",
            hour: "na 1 uur",
            hours: "na %s uur",
            day: "na 1 dag",
            days: "na %s dagen",
            week: "na 1 week",
            weeks: "na %s weken",
            month: "onaver 1 maand",
            months: "na%s maanden",
            year: "na 1 jaar",
            years: "na %s jaar"
        }
    },
    notFound: {
        alt: "404 Pagina niet gevonden"
    },
    system: {
        trigger: "Trigger",
        clear: "Clear",
        cronInfo: "Roep de cron job aan die resources opruimt, zoals verlopen gebruikersrollen, verweesde gebruikers en inactieve gebruikers",
        cronNotificationsInfo: "Roep de cron job aan die notificatie mails verstuurd voor gebruikersrollen die verlopen in X dagen",
        noMails: "Geen notificatie mails zijn vertstuurd voor bijna verlopen gebruikersrollen"
    },
    unknownRoles: {
        title: "Rollen gekoppeld aan applicaties die verwijderd zijn in Manage",
        searchPlaceHolder: "Zoek...",
        noRoles: "Yeah, no unknown manage applications"
    },
    expiredUserRoles: {
        title: "Roles to be expired the next month",
        searchPlaceHolder: "Zoek...",
        noResults: "Yeah, no user-roles to be expired within one month"
    }
}

export default nl;
