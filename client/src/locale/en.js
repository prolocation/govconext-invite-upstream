const en = {
    code: "EN",
    name: "English",
    select_locale: "Change language to English",
    landing: {
        header: {
            title: "Manage access to your applications",
            login: "Login",
            sup: "The SURFconext Invite application is by invite only.",
        },
        works: "How does it work?",
        adminFunction: "admin function",
        info: [
            //Arrays of titles and info blocks and if a function is an admin function
            ["Invites", "<p>SURF invites institution managers who can create roles for their applications.</p>" +
            "<p>Applications are services connected to SURFconext.</p>", true],
            ["Roles", "<p>The application managers will invite colleagues for roles who can invite guests.</p>" +
            "<p>Invites.</p>", true],
            ["Join", "<p>Invited colleagues who accept the invitation are granted access rights for the applications.</p><br/>", false],
            ["Groups", "<p>The roles are actually group memberships that can be provisioned to external SCIM API's.</p>", false]
        ],
        footer: "<p>SURFconext Invite is a service for access management to SURFconext-connected service providers.</p>" +
            "<p>Do you want to know more? Please visit <a href='https://surf.nl/en/invite'>https://surf.nl/en/invite</a>.</p>",
    },
    header: {
        title: "SURFconext Invite",
        subTitle: "Everything will be Owl right",
        links: {
            login: "Login",
            system: "System",
            switchApp: "Go to {{app}}",
            welcome: "Welcome",
            access: "Access",
            help: "Help",
            profile: "Profile",
            logout: "Logout",
            helpUrl: "https://support.surfconext.nl/help-invite-en"
        },
    },
    tabs: {
        home: "Home",
        applications: "Applications",
        users: "Users",
        maintainers: "Role managers & inviters",
        guests: "Guest with this role",
        invitations: "Invitations",
        roles: "Access roles",
        profile: "Profile",
        userRoles: "Role managers & inviters",
        guestRoles: "Guests",
        cron: "Cron",
        invite: "Invite"
    },
    home: {
        access: "SURFconext Invite",
    },
    impersonate: {
        exit: "Stop impersonating",
        impersonator: "You are impersonating <strong>{{name}}</strong> | <strong>{{role}}</strong>",
        impersonatorTooltip: "You are really <em>{{impersonator}}</em>, but you are impersonating <em>{{currentUser}}</em>.",
        flash: {
            startedImpersonation: "You now impersonate {{name}}.",
            clearedImpersonation: "Cleared your impersonation. You are you again."
        },
    },
    access: {
        SUPER_USER: "Super User",
        INSTITUTION_ADMIN: "Institution admin",
        MANAGER: "Manager",
        INVITER: "Inviter",
        GUEST: "Guest",
        "No member": "No member"
    },
    users: {
        found: "{{count}} {{plural}} found",
        moreResults: "There are more results than shown, please refine your search.",
        applicationsSearchPlaceHolder: "Search for roles...",
        name_email: "Name / email",
        name: "Name",
        email: "Email",
        highestAuthority: "Role",
        schacHomeOrganization: "Institution",
        lastActivity: "Last activity",
        eduPersonPrincipalName: "EPPN",
        sub: "Sub",
        singleUser: "user",
        multipleUsers: "users",
        noEntities: "No users found",
        new: "New invitation",
        title: "Users",
        roles: "Roles",
        applications: "Applications",
        noRolesInfo: "You have no roles (which means you must be super-user)",
        noRolesInstitutionAdmin: "As an institution admin you have no roles (but you do have access to applications)",
        rolesInfo: "You have the following roles",
        applicationsInfo: "You have access to the following applications",
        noRolesFound: "No roles are found.",
        noApplicationsFound: "No applications are found.",
        rolesInfoOther: "{{name}} has the following roles",
        applicationsInfoOther: "{{name}} has access to the following applications",
        landingPage: "Landing page",
        access: "Access",
        organisation: "Organisation",
        noResults: "No users are found",
        searchPlaceHolder: "Search for users...",
        authority: "Authority",
        endDate: "End date",
        expiryDays: "Expiry days"
    },
    role: {
        copyUrn: "Copy urn",
        userInfo: "{{nbr}} member(s)  &  Valid for {{valid}} days",
    },
    roles: {
        title: "Access Roles",
        applicationName: "Application",
        roleDetails: "Role details",
        invitationDetails: "Invitation details",
        accessRole: "Name",
        name: "Name",
        namePlaceHolder: "The name of the role",
        shortName: "Short name",
        landingPage: "Landing page",
        userRoleCount: "# Users",
        landingPagePlaceHolder: "https://landingpage.com",
        defaultExpiryDays: "Expiry days",
        endDate: "End date",
        noEndDate: "No end date",
        authority: "Authority",
        yourRole: "Your role",
        description: "Description",
        descriptionPlaceHolder: "The description of the role",
        noResults: "No roles are found",
        noMember: "No member",
        searchPlaceHolder: "Search for roles...",
        found: "{{count}} {{plural}} found",
        singleRole: "role",
        multipleRoles: "roles",
        new: "Add new role",
        edit: "Edit role {{name}}",
        urn: "URN",
        advanced: "Advanced settings",
        showAdvancedSettings: "Show advanced invite settings",
        hideAdvancedSettings: "Hide advanced invite settings",
        override: "Override of settings allowed?",
        manage: "Service",
        manageMetaData: "SURFconext entity",
        provisioning: "Provisioning",
        deleteFlash: "Role {{name}} has been deleted",
        deleteConfirmation: "Are you sure  you want to delete this role?",
        createFlash: "Role {{name}} has been created",
        updateFlash: "Role {{name}} has been updated",
    },
    applications: {
        searchPlaceHolder: "Search for roles"
    },
    userRoles: {
        found: "{{count}} {{plural}} found",
        singleUserRole: "user role",
        multipleUserRoles: "user roles",
        searchPlaceHolder: "Search for user roles...",
        noResults: "No user roles where found",
        notAllowed: "You're not allowed to delete this user role because of missing roles",
        updateConfirmation: "Are you sure you want to change the end date of role {{roleName}} for {{userName}}",
        updateConfirmationRemoveEndDate: "Are you sure you want to remove the end date of role {{roleName}} for {{userName}}",
        updateFlash: "The end date for role {{roleName}} has been updated",
        deleteConfirmation: "Are you sure  you want to remove this role from this user(s)?",
        deleteFlash: "User role(s) have been removed",
        createdAt: "Accepted at",
    },
    invitations: {
        found: "{{count}} {{plural}} found",
        singleInvitation: "invitation",
        multipleInvitations: "invitations",
        searchPlaceHolder: "Search for invitation...",
        noResults: "No invitation where found",
        inviter: "Inviter",
        status: "Status",
        open: "Open",
        accepted: "Accepted",
        expired: "Expired",
        enforceEmailEquality: "Email equality",
        eduIDOnly: "eduID only",
        new: "Invite manager or inviter",
        newInvite: "New invite",
        newGuest: "Invite guest",
        invitees: "Invitees",
        intendedRoles: "Roles",
        inviteesPlaceholder: "Invitee email addresses",
        requiredEmail: "At least one email is required",
        requiredRole: "At least one role is required for an invitation",
        intendedAuthority: "Authority",
        roles: "Roles",
        inviterRoles: "Send new invitation for the following roles",
        rolesPlaceHolder: "Choose one or more roles",
        expiryDate: "Invitation expiry date",
        roleExpiryDate: "Role expiry date",
        createdAt: "Sent",
        message: "Message",
        messagePlaceholder: "Personal message for the invitee included in the invitation",
        invite: "Send invite",
        invalidEmails: "Invalid email addresses removed: {{emails}}.",
        createFlash: "Invitation was sent",
        delete: "Delete",
        resend: "Resend",
        notAllowed: "You're not allowed to delete or resend this invitation because of missing roles",
        deleteFlash: "Invitation(s) have been deleted",
        deleteConfirmation: "Are you sure you want to delete this invitation(s)?",
        resendConfirmation: "Are you sure you want to resend this invitation(s)?",
        resendFlash: "Invitation(s) have been resent",
        statuses: {
            all: "All ({{nbr}})",
            open: "Open",
            accepted: "Accepted"
        }
    },
    forms: {
        none: "None",
        notApplicable: "N/A",
        you: "You",
        yes: "Yes",
        no: "No",
        ok: "Ok",
        or: "or ",
        edit: "Edit",
        cancel: "Cancel",
        save: "Save",
        and: "and",
        more: "More",
        less: "Less",
        alreadyExists: "The {{attribute}} '{{value}}' already exists",
        alreadyExistsParent: "The {{attribute}} {{value}} already exists within {{parent}}",
        required: "The {{attribute}} is required",
        invalid: "The value '{{value}}' is invalid for {{attribute}}",
        error: "You can <a href=\"mailto:support@surfconext.nl\">contact SURFconext Invite</a> for more information.<br/><br/>" +
            "The reference number for this exception is {{reference}}."
    },
    profile: {
        info: "The account of {{name}} was created on {{createdAt}}",
        your: "Your account was created on {{createdAt}}"
    },
    inviteOnly: {
        welcome: "Welcome to SURFconext Invite",
        roles: "You don't have any roles.",
        info: "The SURFconext Invite application is by invite only. If you want to enter, but don't have access, please contact <a href='mailto:support@surfconext.nl'>support@surfconect.nl</a>.",
        preLogin: "Or ",
        login: "login",
        postLogin: " again with a different institution",
    },
    missingAttributes: {
        welcome: "Welcome to SURFconext Invite",
        attributes: "Your institution has not provided all required attributes. The following attributes are missing:",
        info: "If you want more information, please contact <a href='mailto:support@surfconext.nl'>support@surfconext.nl</a>.",
        preLogin: "Or ",
        login: "login",
        postLogin: " again with a different institution.",
    },
    invitationAccept: {
        hi: "Hi{{name}},",
        nextStep: "Next: enjoy your new role",
        expired: "This invitation has expired at {{expiryDate}}",
        expiredInfo: "Please contact <a href='mailto:{{email}}'>{{email}}</a> and ask this person to send you a new invite.",
        invited: "You have been invited to become {{authority}} for the {{plural}} {{roles}} by {{inviter}}.",
        invitedNoRoles: "You have been invited to become {{authority}} by {{inviter}}",
        enforceEmailEquality: " This invite can only be accepted by <strong>{{email}}</strong>.",
        role: "role",
        roles: "roles",
        progress: "1",
        info: "SURFconext Invite provides access to application based on your roles.",
        infoLogin: "You can login with your institution account or edulD.",
        infoLoginEduIDOnly: "You need to login with eduID.",
        infoLoginAgain: "To accept the invitation you'll need to login again.",
        login: "Login",
        loginWithSub: "Login",
        emailMismatch: "The inviter has indicated that you must accept this invitation with the email {{email}}, " +
            "but you have logged in with an account with a different email. Please login in with a different account."
    },
    inviter: {
        welcome: "Welcome, {{name}}",
        info: "Manage who gets access to the <strong>educational applications</strong> at <strong>your institution</strong>.",
        sendInvite: "Send new invite",
        viewHistory: "view history",
        manage: "You can manage guests and send invites for",
        details: "Show details",
        history: "Invitation History"
    },
    institutionAdmin: {
        welcome: "Welcome Institution administrator of {{name}}! You can start with creating your first role and subsequently invite managers.",
        create: "Create access role"
    },
    tooltips: {
        userIcon: "User {{name}} provisioned at {{createdAt}} with last activity on {{lastActivity}}",
        impersonateIcon: "Impersonate user {{name}}",
        roleIcon: "Role {{name}} created at {{createdAt}}",
        userRoleIcon: "User role accepted by {{name}} at {{createdAt}}",
        invitationIcon: "Invitation for {{email}} sent at {{createdAt}} with expiration date {{expiryDate}}",
        roleShortName: "The unique short name of the role within a provisioning. It is used to format the urn and therefore not all characters are allowed.",
        roleUrn: "The urn of the role. It is based on the sanitized name and the application identifier. It is used as the unique global identifier of this role and therefore not all characters are allowed.",
        manageService: "The required service from SURFconext with may have an optional provisioning",
        defaultExpiryDays: "The default number of days the role will expiry when a use accepts a invitation for this role",
        enforceEmailEqualityTooltip: "When checked the invitee must accept the invitation with the email where the invitation was sent to",
        eduIDOnlyTooltip: "When checked the invitees will be required to login with eduID",
        roleExpiryDateTooltip: "The end date of this role. After this date the role is removed from the user.",
        expiryDateTooltip: "The date on which this invitation expires",
        rolesTooltip: "Select all the roles that the invitee will be granted after accepting the invitation",
        intendedAuthorityTooltip: "The authority determines the rights the invitee will be granted after accepting the invitation",
        inviteesTooltip: "Add email addresses separated by comma, space or semi-colon or one-by-one using the enter key. You can also copy & paste a csv file with line-separated email addresses.",
        removeInvitation: "Delete all selected invitations",
        resendInvitation: "Resend all selected invitations",
        inviter: "Send invitations to persons who will - once accepted - become guest users for the application",
        overrideSettingsAllowed: "If checked then invitations for this role can't override the advanced setting (e.g. Email equality, eduID only and the role expiry end date)"
    },
    confirmationDialog: {
        title: "Confirm",
        error: "Error",
        subTitle: "This action requires a confirmation",
        subTitleError: "An error has occurred",
        confirm: "Confirm",
        ok: "OK",
        cancel: "Cancel",
    },
    footer: {
        terms: "Terms of Use",
        termsLink: "https://support.surfconext.nl/terms-en",
        privacy: "Privacy policy",
        privacyLink: "https://support.surfconext.nl/privacy-en",
        surfLink: "https://surf.nl",
    },
    expirations: {
        expires: "Expires {{relativeTime}}",
        expired: "Expired {{relativeTime}}",
        never: "Never expires",
        activity: {
            now: "Just now",
            seconds: "Today",
            minute: "Today",
            minutes: "Today",
            hour: "Today",
            hours: "Today",
            day: "Yesterday",
            days: "This week",
            week: "This week",
            weeks: "This month",
            month: "Last month",
            months: "%s months ago",
            year: "1 year ago",
            years: "%s years ago"
        },
        ago: {
            now: "just now",
            seconds: "%s seconds ago",
            minute: "1 minute ago",
            minutes: "%s minutes ago",
            hour: "1 hour ago",
            hours: "%s hours ago",
            day: "1 day ago",
            days: "%s days ago",
            week: "1 week ago",
            weeks: "%s weeks ago",
            month: "1 month ago",
            months: "%s months ago",
            year: "1 year ago",
            years: "%s years ago"
        },
        in: {
            now: "right now",
            seconds: "in %s seconds",
            minute: "in 1 minute",
            minutes: "in %s minutes",
            hour: "in 1 hour",
            hours: "in %s hours",
            day: "in 1 day",
            days: "in %s days",
            week: "in 1 week",
            weeks: "in %s weeks",
            month: "in 1 month",
            months: "in %s months",
            year: "in 1 year",
            years: "in %s years"
        }
    },
    notFound: {
        alt: "404 Page not found"
    },
    system: {
        trigger: "Trigger",
        clear: "Clear",
        cronInfo: "Trigger the cron job to cleanup resources like expired user-roles, orphaned users and in-active users"
    }
}

export default en;
