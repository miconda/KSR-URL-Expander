/*!
 *
 * Browser Extension (omnibox) - URL Expander For Kamailio.org Resources
 *
 * Copyright (C) 2020 Daniel-Constantin Mierla <miconda@gmail.com>
 *
 * BSD 3-Clause License (see LICENSE file)
 *
 */

/*
 * list of kamailio modules
 *   - generated with: ls -1 src/modules/ | awk '{ print "  \"" $1 "\"," }'
 *   - needs the strip of last comma
 */
const ksrModules = [
  "acc",
  "acc_diameter",
  "acc_json",
  "acc_radius",
  "alias_db",
  "app_java",
  "app_jsdt",
  "app_lua",
  "app_lua_sr",
  "app_mono",
  "app_perl",
  "app_python",
  "app_python3",
  "app_ruby",
  "app_sqlang",
  "async",
  "auth",
  "auth_db",
  "auth_diameter",
  "auth_ephemeral",
  "auth_identity",
  "auth_radius",
  "auth_xkeys",
  "avp",
  "avpops",
  "benchmark",
  "blst",
  "call_control",
  "call_obj",
  "carrierroute",
  "cdp",
  "cdp_avp",
  "cfg_db",
  "cfg_rpc",
  "cfgt",
  "cfgutils",
  "cnxcc",
  "corex",
  "counters",
  "cplc",
  "crypto",
  "ctl",
  "db2_ldap",
  "db2_ops",
  "db_berkeley",
  "db_cassandra",
  "db_cluster",
  "db_flatstore",
  "db_mongodb",
  "db_mysql",
  "db_oracle",
  "db_perlvdb",
  "db_postgres",
  "db_redis",
  "db_sqlite",
  "db_text",
  "db_unixodbc",
  "debugger",
  "dialog",
  "dialplan",
  "dispatcher",
  "diversion",
  "dlgs",
  "dmq",
  "dmq_usrloc",
  "dnssec",
  "domain",
  "domainpolicy",
  "drouting",
  "enum",
  "erlang",
  "evapi",
  "evrexec",
  "exec",
  "geoip",
  "geoip2",
  "group",
  "gzcompress",
  "h350",
  "htable",
  "http_async_client",
  "http_client",
  "imc",
  "ims_auth",
  "ims_charging",
  "ims_dialog",
  "ims_diameter_server",
  "ims_icscf",
  "ims_ipsec_pcscf",
  "ims_isc",
  "ims_ocs",
  "ims_qos",
  "ims_registrar_pcscf",
  "ims_registrar_scscf",
  "ims_usrloc_pcscf",
  "ims_usrloc_scscf",
  "ipops",
  "jansson",
  "janssonrpcc",
  "json",
  "jsonrpcc",
  "jsonrpcs",
  "kafka",
  "kazoo",
  "keepalive",
  "kemix",
  "kex",
  "lcr",
  "ldap",
  "log_custom",
  "log_systemd",
  "lost",
  "malloc_test",
  "mangler",
  "matrix",
  "maxfwd",
  "mediaproxy",
  "memcached",
  "misc_radius",
  "mohqueue",
  "mqtt",
  "mqueue",
  "msilo",
  "msrp",
  "mtree",
  "nat_traversal",
  "nathelper",
  "ndb_cassandra",
  "ndb_mongodb",
  "ndb_redis",
  "nosip",
  "nsq",
  "osp",
  "outbound",
  "p_usrloc",
  "path",
  "pdb",
  "pdt",
  "peering",
  "permissions",
  "phonenum",
  "pike",
  "pipelimit",
  "prefix_route",
  "presence",
  "presence_conference",
  "presence_dialoginfo",
  "presence_mwi",
  "presence_profile",
  "presence_reginfo",
  "presence_xml",
  "print",
  "print_lib",
  "pua",
  "pua_bla",
  "pua_dialoginfo",
  "pua_json",
  "pua_reginfo",
  "pua_rpc",
  "pua_usrloc",
  "pua_xmpp",
  "pv",
  "pv_headers",
  "qos",
  "rabbitmq",
  "ratelimit",
  "regex",
  "registrar",
  "rls",
  "rr",
  "rtimer",
  "rtjson",
  "rtp_media_server",
  "rtpengine",
  "rtpproxy",
  "sanity",
  "sca",
  "sctp",
  "sdpops",
  "seas",
  "secfilter",
  "secsipid",
  "sipcapture",
  "sipdump",
  "sipjson",
  "sipt",
  "siptrace",
  "siputils",
  "sl",
  "sms",
  "smsops",
  "snmpstats",
  "speeddial",
  "sqlops",
  "ss7ops",
  "sst",
  "statistics",
  "statsc",
  "statsd",
  "stun",
  "systemdops",
  "tcpops",
  "textops",
  "textopsx",
  "timer",
  "tls",
  "tm",
  "tmrec",
  "tmx",
  "topoh",
  "topos",
  "topos_redis",
  "tsilo",
  "uac",
  "uac_redirect",
  "uid_auth_db",
  "uid_avp_db",
  "uid_domain",
  "uid_gflags",
  "uid_uri_db",
  "uri_db",
  "userblacklist",
  "usrloc",
  "utils",
  "uuid",
  "websocket",
  "xcap_client",
  "xcap_server",
  "xhttp",
  "xhttp_pi",
  "xhttp_prom",
  "xhttp_rpc",
  "xlog",
  "xmlops",
  "xmlrpc",
  "xmpp",
  "xprint"
];

/*
Return an array of SuggestResult objects,
one for each CSS property that matches the user's input.
*/
function getMatchingModules(input) {
  var result = [];
  var modCmd = "";
  var modName = "";
  if (input.indexOf("m ") === 0) {
    modCmd = "m ";
    modName = input.substr(2).trim();
  } else if (input.indexOf("md ") === 0) {
    modCmd = "md ";
    modName = input.substr(3).trim();
  }
  if (modCmd.length > 0) {
    for (m of ksrModules) {
      if (m.indexOf(modName) === 0) {
        let suggestion = {
          content: modCmd + m,
          description: m
        }
        result.push(suggestion);
      } else {
        if (result.length != 0) {
          return result;
        }
      }
    }
  }
  return result;
}

chrome.omnibox.setDefaultSuggestion({
  description: "Type the kamilio.org URL expand expression"
});

chrome.omnibox.onInputChanged.addListener(function(input, suggest) {
  suggest(getMatchingModules(input));
});

chrome.omnibox.onInputEntered.addListener(function(text) {
  var inText = text.trim();
  var fullURL = 'https://www.kamailio.org';

  if(inText.length == 0) {
    chrome.tabs.update({url: fullURL});
    return;
  }

  if (inText === "w") {
    fullURL += '/wiki';
  } else if (inText.indexOf("s ") === 0) {
    fullURL = 'https://www.google.com/search?q=' + inText.substr(2).trim() + ' site:kamailio.org';
  } else if (inText.indexOf("sl ") === 0) {
    fullURL = 'https://www.google.com/search?q=' + inText.substr(3).trim() + ' site:lists.kamailio.org';
  } else if (inText.indexOf("m ") === 0) {
    fullURL += '/docs/modules/stable/modules/' + inText.substr(2).trim() + '.html';
  } else if (inText.indexOf("md ") === 0) {
    fullURL += '/docs/modules/devel/modules/' + inText.substr(3).trim() + '.html';
  } else {
    fullURL += '/docs/modules/stable/modules/' + inText + '.html';
  }

  chrome.tabs.update({url: fullURL});
});