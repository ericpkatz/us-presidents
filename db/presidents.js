var data = [];

module.exports = {
    list: function(){
        return data;
    },
    insert: function(president){
        data.push(president);
    }
};