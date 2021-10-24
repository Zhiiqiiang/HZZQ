/* 
nfzm_content = type=http-response,pattern=^http:\//api.infzm.com\/mobile\/contents\/.*?user=19976699850@infzm.com,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/litieyin/AD_VIP/main/Script/nfzm/contents.js,script-update-interval=0

hostname = api.infzm.com

*/

  var body = $response.body
    .replace(/\"isview\":false/g, "\"isview\":true")
    .replace(/\"mode\":\"meterage\"/g, "\"mode\":\"free\"")
    .replace(/\"is_original\":1/g, "\"is_original\":0")
    .replace(/\"people_magazine_content_id\":.*?,/g, "\"people_magazine_content_id\":0,")
    .replace(/\"magazine_content_id\":.*?,/g, "\"magazine_content_id\":0,")
    .replace(/\"poster_to_share\":1/g, "\"poster_to_share\":0");
$done({ body });
