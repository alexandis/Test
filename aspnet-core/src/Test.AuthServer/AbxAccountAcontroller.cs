using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Owl.reCAPTCHA;
using Volo.Abp.Identity;
using Volo.Abp.Security.Claims;
using Volo.Abp.Settings;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Account.Public.Web.Areas.Account.Controllers.Models;
using Volo.Abp.AspNetCore.Controllers;
using Asp.Versioning;

namespace Volo.Abp.Account.Public.Web.Areas.Account.Controllers
{
    [ReplaceControllers(typeof(AccountController))]
    [Controller]
    [ControllerName("Login")]
    [Area(AccountProPublicRemoteServiceConsts.ModuleName)]
    [Route("api/account")]
    public class AbxAccountAcontroller : AccountController
    {
        public AbxAccountAcontroller(SignInManager<Identity.IdentityUser> signInManager, IdentityUserManager userManager, IdentitySecurityLogManager identitySecurityLogManager, IIdentityLinkUserAppService identityLinkUserAppService, ICurrentPrincipalAccessor currentPrincipalAccessor, IOptions<IdentityOptions> identityOptions, IOptionsSnapshot<reCAPTCHAOptions> reCaptchaOptions, ISettingProvider settingProvider, IdentityDynamicClaimsPrincipalContributorCache identityDynamicClaimsPrincipalContributorCache)
            : base(signInManager, userManager, identitySecurityLogManager, identityLinkUserAppService, currentPrincipalAccessor, identityOptions, reCaptchaOptions, settingProvider, identityDynamicClaimsPrincipalContributorCache)
        {
        }

        [HttpPost]
        [Route("login")]
        public override async Task<AbpLoginResult> Login(Models.UserLoginInfo login)
        {
            base.ValidateLoginInfo(login);

            await base.ReplaceEmailToUsernameOfInputIfNeeds(login);

            if (HttpContext.User.Identity != null && HttpContext.User.Identity.IsAuthenticated)
            {
                // If already authenticated, return a successful login result
                return new AbpLoginResult(LoginResultType.Success);
            }

            return await base.Login(login);
        }
    }
}