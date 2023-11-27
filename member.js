function skillMember() {
    return {
        retrict : 'E',
        templateUrl : 'modules/skill/views/member.html',
        controller : 'SkillMemberController',
        controllerAs : 'vm',
        binToController : true,
        scope : {
            member : '=',
            
        }
    };
}


