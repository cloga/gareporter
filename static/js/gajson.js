var gaJSON = {
 "kind": "analytics#columns",
 "etag": "\"nX3edgsSXsm8ztSdDFDXIibHobA/dcZJZ7FHM3s3yPqIZZcrYxMPj_U\"",
 "totalResults": 424,
 "attributeNames": [
  "replacedBy",
  "type",
  "dataType",
  "group",
  "status",
  "uiName",
  "appUiName",
  "description",
  "calculation",
  "minTemplateIndex",
  "maxTemplateIndex",
  "premiumMinTemplateIndex",
  "premiumMaxTemplateIndex",
  "allowedInSegments"
 ],
 "items": [
  {
   "id": "ga:userType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User",
    "status": "PUBLIC",
    "uiName": "User Type",
    "description": "A boolean indicating if a user is new or returning. Possible values: New Visitor, Returning Visitor.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:visitorType",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:userType",
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User",
    "status": "DEPRECATED",
    "uiName": "User Type",
    "description": "A boolean indicating if a user is new or returning. Possible values: New Visitor, Returning Visitor.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:sessionCount",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User",
    "status": "PUBLIC",
    "uiName": "Count of Sessions",
    "description": "The session index for a user to your property. Each session from a unique user will get its own incremental index starting from 1 for the first session. Subsequent sessions do not change previous session indicies. For example, if a certain user has 4 sessions to your website, sessionCount for that user will have 4 distinct values of '1' through '4'.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:visitCount",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:sessionCount",
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User",
    "status": "DEPRECATED",
    "uiName": "Count of Sessions",
    "description": "The session index for a user to your property. Each session from a unique user will get its own incremental index starting from 1 for the first session. Subsequent sessions do not change previous session indicies. For example, if a certain user has 4 sessions to your website, sessionCount for that user will have 4 distinct values of '1' through '4'.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:daysSinceLastSession",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User",
    "status": "PUBLIC",
    "uiName": "Days Since Last Session",
    "description": "The number of days elapsed since users last visited your property. Used to calculate user loyalty.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:daysSinceLastVisit",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:daysSinceLastSession",
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User",
    "status": "DEPRECATED",
    "uiName": "Days Since Last Session",
    "description": "The number of days elapsed since users last visited your property. Used to calculate user loyalty.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:userDefinedValue",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User",
    "status": "PUBLIC",
    "uiName": "User Defined Value",
    "description": "The value provided when you define custom user segments for your property.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:users",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "User",
    "status": "PUBLIC",
    "uiName": "Users",
    "description": "Total number of users to your property for the requested time period."
   }
  },
  {
   "id": "ga:visitors",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:users",
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "User",
    "status": "DEPRECATED",
    "uiName": "Users",
    "description": "Total number of users to your property for the requested time period."
   }
  },
  {
   "id": "ga:newUsers",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "User",
    "status": "PUBLIC",
    "uiName": "New Users",
    "description": "The number of users whose session on your property was marked as a first-time session.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:newVisits",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:newUsers",
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "User",
    "status": "DEPRECATED",
    "uiName": "New Users",
    "description": "The number of users whose session on your property was marked as a first-time session.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:percentNewSessions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "User",
    "status": "PUBLIC",
    "uiName": "% New Sessions",
    "description": "The percentage of sessions by people who had never visited your property before.",
    "calculation": "ga:newUsers / ga:sessions"
   }
  },
  {
   "id": "ga:percentNewVisits",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:percentNewSessions",
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "User",
    "status": "DEPRECATED",
    "uiName": "% New Sessions",
    "description": "The percentage of sessions by people who had never visited your property before.",
    "calculation": "ga:newUsers / ga:sessions"
   }
  },
  {
   "id": "ga:sessionDurationBucket",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Session",
    "status": "PUBLIC",
    "uiName": "Session Duration",
    "description": "The length of a session on your property measured in seconds and reported in second increments. The value returned is a string.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:visitLength",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:sessionDurationBucket",
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Session",
    "status": "DEPRECATED",
    "uiName": "Session Duration",
    "description": "The length of a session on your property measured in seconds and reported in second increments. The value returned is a string.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:sessions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Session",
    "status": "PUBLIC",
    "uiName": "Sessions",
    "description": "Counts the total number of sessions.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:visits",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:sessions",
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Session",
    "status": "DEPRECATED",
    "uiName": "Sessions",
    "description": "Counts the total number of sessions.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:bounces",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Session",
    "status": "PUBLIC",
    "uiName": "Bounces",
    "description": "The total number of single page (or single engagement hit) sessions for your property.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:entranceBounceRate",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:bounceRate",
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Session",
    "status": "DEPRECATED",
    "uiName": "Bounce Rate",
    "description": "This dimension is deprecated and will be removed soon. Please use ga:bounceRate instead.",
    "calculation": "ga:bounces / ga:entrances"
   }
  },
  {
   "id": "ga:bounceRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Session",
    "status": "PUBLIC",
    "uiName": "Bounce Rate",
    "description": "The percentage of single-page session (i.e., session in which the person left your property from the first page).",
    "calculation": "ga:bounces / ga:sessions"
   }
  },
  {
   "id": "ga:visitBounceRate",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:bounceRate",
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Session",
    "status": "DEPRECATED",
    "uiName": "Bounce Rate",
    "description": "The percentage of single-page session (i.e., session in which the person left your property from the first page).",
    "calculation": "ga:bounces / ga:sessions"
   }
  },
  {
   "id": "ga:sessionDuration",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "TIME",
    "group": "Session",
    "status": "PUBLIC",
    "uiName": "Session Duration",
    "description": "The total duration of user sessions represented in total seconds.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:timeOnSite",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:sessionDuration",
    "type": "METRIC",
    "dataType": "TIME",
    "group": "Session",
    "status": "DEPRECATED",
    "uiName": "Session Duration",
    "description": "The total duration of user sessions represented in total seconds.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:avgSessionDuration",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "TIME",
    "group": "Session",
    "status": "PUBLIC",
    "uiName": "Avg. Session Duration",
    "description": "The average duration of user sessions represented in total seconds.",
    "calculation": "ga:sessionDuration / ga:sessions"
   }
  },
  {
   "id": "ga:avgTimeOnSite",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:avgSessionDuration",
    "type": "METRIC",
    "dataType": "TIME",
    "group": "Session",
    "status": "DEPRECATED",
    "uiName": "Avg. Session Duration",
    "description": "The average duration of user sessions represented in total seconds.",
    "calculation": "ga:sessionDuration / ga:sessions"
   }
  },
  {
   "id": "ga:referralPath",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Referral Path",
    "description": "The path of the referring URL (e.g. document.referrer). If someone places a link to your property on their website, this element contains the path of the page that contains the referring link.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:fullReferrer",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Full Referrer",
    "description": "The full referring URL including the hostname and path."
   }
  },
  {
   "id": "ga:campaign",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Campaign",
    "description": "When using manual campaign tracking, the value of the utm_campaign campaign tracking parameter. When using AdWords autotagging, the name(s) of the online ad campaign that you use for your property. Otherwise the value (not set) is used.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:source",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Source",
    "description": "The source of referrals to your property. When using manual campaign tracking, the value of the utm_source campaign tracking parameter. When using AdWords autotagging, the value is google. Otherwise the domain of the source referring the user to your property (e.g. document.referrer). The value may also contain a port address. If the user arrived without a referrer, the value is (direct)",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:medium",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Medium",
    "description": "The type of referrals to your property. When using manual campaign tracking, the value of the utm_medium campaign tracking parameter. When using AdWords autotagging, the value is ppc. If the user comes from a search engine detected by Google Analytics, the value is organic. If the referrer is not a search engine, the value is referral. If the users came directly to the property, and document.referrer is empty, the value is (none).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:sourceMedium",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Source / Medium",
    "description": "Combined values of ga:source and ga:medium.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:keyword",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Keyword",
    "description": "When using manual campaign tracking, the value of the utm_term campaign tracking parameter. When using AdWords autotagging or if a user used organic search to reach your property, the keywords used by users to reach your property. Otherwise the value is (not set).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adContent",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Ad Content",
    "description": "When using manual campaign tracking, the value of the utm_content campaign tracking parameter. When using AdWords autotagging, the first line of the text for your online Ad campaign. If you are using mad libs for your AdWords content, this field displays the keywords you provided for the mad libs keyword match. Otherwise the value is (not set)",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:socialNetwork",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Social Network",
    "description": "Name of the social network. This can be related to the referring social network for traffic sources, or to the social network for social data hub activities. E.g. Google+, Blogger, etc."
   }
  },
  {
   "id": "ga:hasSocialSourceReferral",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Social Source Referral",
    "description": "Indicates sessions that arrived to the property from a social source. The possible values are Yes or No where the first letter is capitalized."
   }
  },
  {
   "id": "ga:organicSearches",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Organic Searches",
    "description": "The number of organic searches that happened within a session. This metric is search engine agnostic."
   }
  },
  {
   "id": "ga:adGroup",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Ad Group",
    "description": "The name of your AdWords ad group.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adSlot",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Ad Slot",
    "description": "The location of the advertisement on the hosting page (Top, RHS, or not set).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adSlotPosition",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Ad Slot Position",
    "description": "The ad slot positions in which your AdWords ads appeared (1-8).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adDistributionNetwork",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Ad Distribution Network",
    "description": "The networks used to deliver your ads (Content, Search, Search partners, etc.)."
   }
  },
  {
   "id": "ga:adMatchType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Query Match Type",
    "description": "The match types applied for the search term the user had input(Phrase, Exact, Broad, etc.). Ads on the content network are identified as \"Content network\". Details: https://support.google.com/adwords/answer/2472708?hl=en"
   }
  },
  {
   "id": "ga:adKeywordMatchType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Keyword Match Type",
    "description": "The match types applied to your keywords (Phrase, Exact, Broad). Details: https://support.google.com/adwords/answer/2472708?hl=en"
   }
  },
  {
   "id": "ga:adMatchedQuery",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Matched Search Query",
    "description": "The search queries that triggered impressions of your AdWords ads."
   }
  },
  {
   "id": "ga:adPlacementDomain",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Placement Domain",
    "description": "The domains where your ads on the content network were placed."
   }
  },
  {
   "id": "ga:adPlacementUrl",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Placement URL",
    "description": "The URLs where your ads on the content network were placed."
   }
  },
  {
   "id": "ga:adFormat",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Ad Format",
    "description": "Your AdWords ad formats (Text, Image, Flash, Video, etc.)."
   }
  },
  {
   "id": "ga:adTargetingType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Targeting Type",
    "description": "How your AdWords ads were targeted (keyword, placement, and vertical targeting, etc.)."
   }
  },
  {
   "id": "ga:adTargetingOption",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Placement Type",
    "description": "How you manage your ads on the content network. Values are Automatic placements or Managed placements."
   }
  },
  {
   "id": "ga:adDisplayUrl",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Display URL",
    "description": "The URLs your AdWords ads displayed."
   }
  },
  {
   "id": "ga:adDestinationUrl",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Destination URL",
    "description": "The URLs to which your AdWords ads referred traffic."
   }
  },
  {
   "id": "ga:adwordsCustomerID",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "AdWords Customer ID",
    "description": "A string. Corresponds to AdWords API AccountInfo.customerId."
   }
  },
  {
   "id": "ga:adwordsCampaignID",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "AdWords Campaign ID",
    "description": "A string. Corresponds to AdWords API Campaign.id."
   }
  },
  {
   "id": "ga:adwordsAdGroupID",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "AdWords Ad Group ID",
    "description": "A string. Corresponds to AdWords API AdGroup.id."
   }
  },
  {
   "id": "ga:adwordsCreativeID",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "AdWords Creative ID",
    "description": "A string. Corresponds to AdWords API Ad.id."
   }
  },
  {
   "id": "ga:adwordsCriteriaID",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "AdWords Criteria ID",
    "description": "A string. Corresponds to AdWords API Criterion.id."
   }
  },
  {
   "id": "ga:impressions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Impressions",
    "description": "Total number of campaign impressions."
   }
  },
  {
   "id": "ga:adClicks",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Clicks",
    "description": "The total number of times users have clicked on an ad to reach your property."
   }
  },
  {
   "id": "ga:adCost",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Cost",
    "description": "Derived cost for the advertising campaign. The currency for this value is based on the currency that you set in your AdWords account."
   }
  },
  {
   "id": "ga:CPM",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "CPM",
    "description": "Cost per thousand impressions.",
    "calculation": "ga:adCost / (ga:impressions / 1000)"
   }
  },
  {
   "id": "ga:CPC",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "CPC",
    "description": "Cost to advertiser per click.",
    "calculation": "ga:adCost / ga:adClicks"
   }
  },
  {
   "id": "ga:CTR",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "CTR",
    "description": "Click-through-rate for your ad. This is equal to the number of clicks divided by the number of impressions for your ad (e.g. how many times users clicked on one of your ads where that ad appeared).",
    "calculation": "ga:adClicks / ga:impressions"
   }
  },
  {
   "id": "ga:costPerTransaction",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Cost per Transaction",
    "description": "The cost per transaction for your property.",
    "calculation": "(ga:adCost) / (ga:transactions)"
   }
  },
  {
   "id": "ga:costPerGoalConversion",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Cost per Goal Conversion",
    "description": "The cost per goal conversion for your property.",
    "calculation": "(ga:adCost) / (ga:goalCompletionsAll)"
   }
  },
  {
   "id": "ga:costPerConversion",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "Cost per Conversion",
    "description": "The cost per conversion (including ecommerce and goal conversions) for your property.",
    "calculation": "(ga:adCost) / (ga:transactions  +  ga:goalCompletionsAll)"
   }
  },
  {
   "id": "ga:RPC",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "RPC",
    "description": "RPC or revenue-per-click is the average revenue (from ecommerce sales and/or goal value) you received for each click on one of your search ads.",
    "calculation": "(ga:transactionRevenue + ga:goalValueAll) / ga:adClicks"
   }
  },
  {
   "id": "ga:ROI",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Adwords",
    "status": "DEPRECATED",
    "uiName": "ROI",
    "description": "This metric is deprecated and will be removed soon. Please use ga:ROAS instead.",
    "calculation": "(ga:transactionRevenue + ga:goalValueAll - ga:adCost) / ga:adCost"
   }
  },
  {
   "id": "ga:margin",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Adwords",
    "status": "DEPRECATED",
    "uiName": "Margin",
    "description": "This metric is deprecated and will be removed soon. Please use ga:ROAS instead.",
    "calculation": "(ga:transactionRevenue + ga:goalValueAll - ga:adCost) / (ga:transactionRevenue + ga:goalValueAll)"
   }
  },
  {
   "id": "ga:ROAS",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "ROAS",
    "description": "Return On Ad Spend (ROAS) is the total transaction revenue and goal value divided by derived advertising cost.",
    "calculation": "(ga:transactionRevenue + ga:goalValueAll) / ga:adCost"
   }
  },
  {
   "id": "ga:goalCompletionLocation",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal Completion Location",
    "description": "The page path or screen name that matched any destination type goal completion."
   }
  },
  {
   "id": "ga:goalPreviousStep1",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal Previous Step - 1",
    "description": "The page path or screen name that matched any destination type goal, one step prior to the goal completion location."
   }
  },
  {
   "id": "ga:goalPreviousStep2",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal Previous Step - 2",
    "description": "The page path or screen name that matched any destination type goal, two steps prior to the goal completion location."
   }
  },
  {
   "id": "ga:goalPreviousStep3",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal Previous Step - 3",
    "description": "The page path or screen name that matched any destination type goal, three steps prior to the goal completion location."
   }
  },
  {
   "id": "ga:goalXXStarts",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal XX Starts",
    "description": "The total number of starts for the requested goal number.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:goalStartsAll",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal Starts",
    "description": "The total number of starts for all goals defined for your profile.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:goalXXCompletions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal XX Completions",
    "description": "The total number of completions for the requested goal number.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:goalCompletionsAll",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal Completions",
    "description": "The total number of completions for all goals defined for your profile.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:goalXXValue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal XX Value",
    "description": "The total numeric value for the requested goal number.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:goalValueAll",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal Value",
    "description": "The total numeric value for all goals defined for your profile.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:goalValuePerSession",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Per Session Goal Value",
    "description": "The average goal value of a session on your property.",
    "calculation": "ga:goalValueAll / ga:sessions"
   }
  },
  {
   "id": "ga:goalValuePerVisit",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:goalValuePerSession",
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Goal Conversions",
    "status": "DEPRECATED",
    "uiName": "Per Session Goal Value",
    "description": "The average goal value of a session on your property.",
    "calculation": "ga:goalValueAll / ga:sessions"
   }
  },
  {
   "id": "ga:goalXXConversionRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal XX Conversion Rate",
    "description": "The percentage of sessions which resulted in a conversion to the requested goal number.",
    "calculation": "ga:goalXXCompletions / ga:sessions",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20"
   }
  },
  {
   "id": "ga:goalConversionRateAll",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal Conversion Rate",
    "description": "The percentage of sessions which resulted in a conversion to at least one of your goals.",
    "calculation": "ga:goalCompletionsAll / ga:sessions"
   }
  },
  {
   "id": "ga:goalXXAbandons",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal XX Abandoned Funnels",
    "description": "The number of times users started conversion activity on the requested goal number without actually completing it.",
    "calculation": "(ga:goalXXStarts - ga:goalXXCompletions)",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20"
   }
  },
  {
   "id": "ga:goalAbandonsAll",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Abandoned Funnels",
    "description": "The overall number of times users started goals without actually completing them.",
    "calculation": "(ga:goalStartsAll - ga:goalCompletionsAll)"
   }
  },
  {
   "id": "ga:goalXXAbandonRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Goal XX Abandonment Rate",
    "description": "The rate at which the requested goal number was abandoned.",
    "calculation": "((ga:goalXXStarts - ga:goalXXCompletions)) / (ga:goalXXStarts)",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20"
   }
  },
  {
   "id": "ga:goalAbandonRateAll",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Goal Conversions",
    "status": "PUBLIC",
    "uiName": "Total Abandonment Rate",
    "description": "The rate at which goals were abandoned.",
    "calculation": "((ga:goalStartsAll - ga:goalCompletionsAll)) / (ga:goalStartsAll)"
   }
  },
  {
   "id": "ga:browser",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Browser",
    "description": "The names of browsers used by users to your website. For example, Internet Explorer or Firefox.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:browserVersion",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Browser Version",
    "description": "The browser versions used by users to your website. For example, 2.0.0.14",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:operatingSystem",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Operating System",
    "description": "The operating system used by your users. For example, Windows, Linux , Macintosh, iPhone, iPod.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:operatingSystemVersion",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Operating System Version",
    "description": "The version of the operating system used by your users, such as XP for Windows or PPC for Macintosh.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:isMobile",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "DEPRECATED",
    "uiName": "Mobile (Including Tablet)",
    "description": "This dimension is deprecated and will be removed soon. Please use ga:deviceCategory instead (e.g., ga:deviceCategory==mobile).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:isTablet",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "DEPRECATED",
    "uiName": "Tablet",
    "description": "This dimension is deprecated and will be removed soon. Please use ga:deviceCategory instead (e.g., ga:deviceCategory==tablet).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:mobileDeviceBranding",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Mobile Device Branding",
    "description": "Mobile manufacturer or branded name.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:mobileDeviceModel",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Mobile Device Model",
    "description": "Mobile device model",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:mobileInputSelector",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Mobile Input Selector",
    "description": "Selector used on the mobile device (e.g.: touchscreen, joystick, clickwheel, stylus).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:mobileDeviceInfo",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Mobile Device Info",
    "description": "The branding, model, and marketing name used to identify the mobile device.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:mobileDeviceMarketingName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Mobile Device Marketing Name",
    "description": "The marketing name used for the mobile device.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:deviceCategory",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Platform or Device",
    "status": "PUBLIC",
    "uiName": "Device Category",
    "description": "The type of device: desktop, tablet, or mobile.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:continent",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Continent",
    "description": "The continents of property users, derived from IP addresses.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:subContinent",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Sub Continent Region",
    "description": "The sub-continent of users, derived from IP addresses. For example, Polynesia or Northern Europe.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:country",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Country / Territory",
    "description": "The country of users, derived from IP addresses.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:region",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Region",
    "description": "The region of users to your property, derived from IP addresses. In the U.S., a region is a state, such as New York.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:metro",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Metro",
    "description": "The Designated Market Area (DMA) from where traffic arrived on your property.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:city",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "City",
    "description": "The cities of property users, derived from IP addresses.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:latitude",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Latitude",
    "description": "The approximate latitude of the user's city. Derived from IP address. Locations north of the equator are represented by positive values and locations south of the equator by negative values."
   }
  },
  {
   "id": "ga:longitude",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Longitude",
    "description": "The approximate longitude of the user's city. Derived from IP address. Locations east of the meridian are represented by positive values and locations west of the meridian by negative values."
   }
  },
  {
   "id": "ga:networkDomain",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Network Domain",
    "description": "The domain name of the ISPs used by users to your property. This is derived from the domain name registered to the IP address.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:networkLocation",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Geo Network",
    "status": "PUBLIC",
    "uiName": "Service Provider",
    "description": "The name of service providers used to reach your property. For example, if most users to your website come via the major service providers for cable internet, you will see the names of those cable service providers in this element.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:flashVersion",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "System",
    "status": "PUBLIC",
    "uiName": "Flash Version",
    "description": "The versions of Flash supported by users' browsers, including minor versions.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:javaEnabled",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "System",
    "status": "PUBLIC",
    "uiName": "Java Support",
    "description": "Indicates Java support for users' browsers. The possible values are Yes or No where the first letter must be capitalized.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:language",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "System",
    "status": "PUBLIC",
    "uiName": "Language",
    "description": "The language provided by the HTTP Request for the browser. Values are given as an ISO-639 code (e.g. en-gb for British English).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:screenColors",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "System",
    "status": "PUBLIC",
    "uiName": "Screen Colors",
    "description": "The color depth of users' monitors, as retrieved from the DOM of the user's browser. For example 4-bit, 8-bit, 24-bit, or undefined-bit.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:sourcePropertyDisplayName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "System",
    "status": "PUBLIC",
    "uiName": "Source Property Display Name",
    "description": "Source property display name of roll-up properties. This is valid only for roll-up properties.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:sourcePropertyTrackingId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "System",
    "status": "PUBLIC",
    "uiName": "Source Property Tracking ID",
    "description": "Source property tracking ID of roll-up properties. This is valid only for roll-up properties.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:screenResolution",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "System",
    "status": "PUBLIC",
    "uiName": "Screen Resolution",
    "description": "The screen resolution of users' screens. For example: 1024x738.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:socialActivityEndorsingUrl",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Endorsing URL",
    "description": "For a social data hub activity, this value represents the URL of the social activity (e.g. the Google+ post URL, the blog comment URL, etc.)"
   }
  },
  {
   "id": "ga:socialActivityDisplayName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Display Name",
    "description": "For a social data hub activity, this value represents the title of the social activity posted by the social network user."
   }
  },
  {
   "id": "ga:socialActivityPost",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Social Activity Post",
    "description": "For a social data hub activity, this value represents the content of the social activity posted by the social network user (e.g. The message content of a Google+ post)"
   }
  },
  {
   "id": "ga:socialActivityTimestamp",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Social Activity Timestamp",
    "description": "For a social data hub activity, this value represents when the social activity occurred on the social network."
   }
  },
  {
   "id": "ga:socialActivityUserHandle",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Social User Handle",
    "description": "For a social data hub activity, this value represents the social network handle (e.g. name or ID) of the user who initiated the social activity."
   }
  },
  {
   "id": "ga:socialActivityUserPhotoUrl",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "User Photo URL",
    "description": "For a social data hub activity, this value represents the URL of the photo associated with the user's social network profile."
   }
  },
  {
   "id": "ga:socialActivityUserProfileUrl",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "User Profile URL",
    "description": "For a social data hub activity, this value represents the URL of the associated user's social network profile."
   }
  },
  {
   "id": "ga:socialActivityContentUrl",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Shared URL",
    "description": "For a social data hub activity, this value represents the URL shared by the associated social network user."
   }
  },
  {
   "id": "ga:socialActivityTagsSummary",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Social Tags Summary",
    "description": "For a social data hub activity, this is a comma-separated set of tags associated with the social activity."
   }
  },
  {
   "id": "ga:socialActivityAction",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Originating Social Action",
    "description": "For a social data hub activity, this value represents the type of social action associated with the activity (e.g. vote, comment, +1, etc.)."
   }
  },
  {
   "id": "ga:socialActivityNetworkAction",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Social Network and Action",
    "description": "For a social data hub activity, this value represents the type of social action and the social network where the activity originated."
   }
  },
  {
   "id": "ga:socialActivities",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Social Activities",
    "status": "PUBLIC",
    "uiName": "Data Hub Activities",
    "description": "The count of activities where a content URL was shared / mentioned on a social data hub partner network."
   }
  },
  {
   "id": "ga:hostname",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Hostname",
    "description": "The hostname from which the tracking request was made.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:pagePath",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Page",
    "description": "A page on your website specified by path and/or query parameters. Use in conjunction with hostname to get the full URL of the page.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:pagePathLevel1",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Page path level 1",
    "description": "This dimension rolls up all the page paths in the first hierarchical level in pagePath."
   }
  },
  {
   "id": "ga:pagePathLevel2",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Page path level 2",
    "description": "This dimension rolls up all the page paths in the second hierarchical level in pagePath."
   }
  },
  {
   "id": "ga:pagePathLevel3",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Page path level 3",
    "description": "This dimension rolls up all the page paths in the third hierarchical level in pagePath."
   }
  },
  {
   "id": "ga:pagePathLevel4",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Page path level 4",
    "description": "This dimension rolls up all the page paths into hierarchical levels. Up to 4 pagePath levels maybe specified. All additional levels in the pagePath hierarchy are also rolled up in this dimension."
   }
  },
  {
   "id": "ga:pageTitle",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Page Title",
    "description": "The title of a page. Keep in mind that multiple pages might have the same page title.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:landingPagePath",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Landing Page",
    "description": "The first page in a user's session, or landing page.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:secondPagePath",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Second Page",
    "description": "The second page in a user's session."
   }
  },
  {
   "id": "ga:exitPagePath",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Exit Page",
    "description": "The last page in a user's session, or exit page.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:previousPagePath",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Previous Page Path",
    "description": "A page on your property that was visited before another page on the same property. Typically used with the pagePath dimension."
   }
  },
  {
   "id": "ga:nextPagePath",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Next Page Path",
    "description": "A page on your website that was visited after another page on your website. Typically used with the previousPagePath dimension."
   }
  },
  {
   "id": "ga:pageDepth",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Page Depth",
    "description": "The number of pages visited by users during a session. The value is a histogram that counts pageviews across a range of possible values. In this calculation, all sessions will have at least one pageview, and some percentage of sessions will have more.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:pageValue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Page Value",
    "description": "The average value of this page or set of pages. Page Value is (ga:transactionRevenue + ga:goalValueAll) / ga:uniquePageviews (for the page or set of pages)."
   }
  },
  {
   "id": "ga:entrances",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Entrances",
    "description": "The number of entrances to your property measured as the first pageview in a session. Typically used with landingPagePath",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:entranceRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Entrances / Pageviews",
    "description": "The percentage of pageviews in which this page was the entrance.",
    "calculation": "ga:entrances / ga:pageviews"
   }
  },
  {
   "id": "ga:pageviews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Pageviews",
    "description": "The total number of pageviews for your property.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:pageviewsPerSession",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Pages / Session",
    "description": "The average number of pages viewed during a session on your property. Repeated views of a single page are counted.",
    "calculation": "ga:pageviews / ga:sessions"
   }
  },
  {
   "id": "ga:pageviewsPerVisit",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:pageviewsPerSession",
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Page Tracking",
    "status": "DEPRECATED",
    "uiName": "Pages / Session",
    "description": "The average number of pages viewed during a session on your property. Repeated views of a single page are counted.",
    "calculation": "ga:pageviews / ga:sessions"
   }
  },
  {
   "id": "ga:contentGroupUniqueViewsXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Content Grouping",
    "status": "PUBLIC",
    "uiName": "Unique Views",
    "description": "The number of different (unique) pages within a session for the specified content group. This takes into account both the pagePath and pageTitle to determine uniqueness.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "5"
   }
  },
  {
   "id": "ga:uniquePageviews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Unique Pageviews",
    "description": "The number of different (unique) pages within a session. This takes into account both the pagePath and pageTitle to determine uniqueness.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:timeOnPage",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "TIME",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Time on Page",
    "description": "How long a user spent on a particular page in seconds. Calculated by subtracting the initial view time for a particular page from the initial view time for a subsequent page. Thus, this metric does not apply to exit pages for your property.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:avgTimeOnPage",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "TIME",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Avg. Time on Page",
    "description": "The average amount of time users spent viewing this page or a set of pages.",
    "calculation": "ga:timeOnPage / (ga:pageviews - ga:exits)"
   }
  },
  {
   "id": "ga:exits",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "Exits",
    "description": "The number of exits from your property.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:exitRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Page Tracking",
    "status": "PUBLIC",
    "uiName": "% Exit",
    "description": "The percentage of exits from your property that occurred out of the total page views.",
    "calculation": "ga:exits / (ga:pageviews + ga:screenviews)"
   }
  },
  {
   "id": "ga:searchUsed",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Site Search Status",
    "description": "A boolean to distinguish whether internal search was used in a session. Values are Visits With Site Search and Visits Without Site Search.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:searchKeyword",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Search Term",
    "description": "Search terms used by users within your property.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:searchKeywordRefinement",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Refined Keyword",
    "description": "Subsequent keyword search terms or strings entered by users after a given initial string search.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:searchCategory",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Site Search Category",
    "description": "The categories used for the internal search if you have this enabled for your profile. For example, you might have product categories such as electronics, furniture, or clothing.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:searchStartPage",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Start Page",
    "description": "A page where the user initiated an internal search on your property."
   }
  },
  {
   "id": "ga:searchDestinationPage",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Destination Page",
    "description": "The page the user immediately visited after performing an internal search on your site. (Usually the search results page)."
   }
  },
  {
   "id": "ga:searchResultViews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Results Pageviews",
    "description": "The number of times a search result page was viewed after performing a search."
   }
  },
  {
   "id": "ga:searchUniques",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Total Unique Searches",
    "description": "The total number of unique keywords from internal searches within a session. For example if \"shoes\" was searched for 3 times in a session, it will be only counted once.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:avgSearchResultViews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Results Pageviews / Search",
    "description": "The average number of times people viewed a search results page after performing a search.",
    "calculation": "ga:searchResultViews / ga:searchUniques"
   }
  },
  {
   "id": "ga:searchSessions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Sessions with Search",
    "description": "The total number of sessions that included an internal search",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:searchVisits",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:searchSessions",
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Internal Search",
    "status": "DEPRECATED",
    "uiName": "Sessions with Search",
    "description": "The total number of sessions that included an internal search",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:percentSessionsWithSearch",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "% Sessions with Search",
    "description": "The percentage of sessions with search.",
    "calculation": "ga:searchSessions / ga:sessions"
   }
  },
  {
   "id": "ga:percentVisitsWithSearch",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:percentSessionsWithSearch",
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Internal Search",
    "status": "DEPRECATED",
    "uiName": "% Sessions with Search",
    "description": "The percentage of sessions with search.",
    "calculation": "ga:searchSessions / ga:sessions"
   }
  },
  {
   "id": "ga:searchDepth",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Search Depth",
    "description": "The average number of subsequent page views made on your property after a use of your internal search feature.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:avgSearchDepth",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Average Search Depth",
    "description": "The average number of pages people viewed after performing a search on your property.",
    "calculation": "ga:searchDepth / ga:searchUniques"
   }
  },
  {
   "id": "ga:searchRefinements",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Search Refinements",
    "description": "The total number of times a refinement (transition) occurs between internal search keywords within a session. For example if the sequence of keywords is: \"shoes\", \"shoes\", \"pants\", \"pants\", this metric will be one because the transition between \"shoes\" and \"pants\" is different.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:percentSearchRefinements",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "% Search Refinements",
    "description": "The percentage of number of times a refinement (i.e., transition) occurs between internal search keywords within a session.",
    "calculation": "ga:searchRefinements / ga:searchResultViews"
   }
  },
  {
   "id": "ga:searchDuration",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "TIME",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Time after Search",
    "description": "The session duration on your property where a use of your internal search feature occurred.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:avgSearchDuration",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "TIME",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Time after Search",
    "description": "The average amount of time people spent on your property after searching.",
    "calculation": "ga:searchDuration / ga:searchUniques"
   }
  },
  {
   "id": "ga:searchExits",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Search Exits",
    "description": "The number of exits on your site that occurred following a search result from your internal search feature.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:searchExitRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "% Search Exits",
    "description": "The percentage of searches that resulted in an immediate exit from your property.",
    "calculation": "ga:searchExits / ga:searchUniques"
   }
  },
  {
   "id": "ga:searchGoalXXConversionRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Site Search Goal XX Conversion Rate",
    "description": "The percentage of search sessions (i.e., sessions that included at least one search) which resulted in a conversion to the requested goal number.",
    "calculation": "ga:goalXXCompletions / ga:searchUniques",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20"
   }
  },
  {
   "id": "ga:searchGoalConversionRateAll",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Site Search Goal Conversion Rate",
    "description": "The percentage of search sessions (i.e., sessions that included at least one search) which resulted in a conversion to at least one of your goals.",
    "calculation": "ga:goalCompletionsAll / ga:searchUniques"
   }
  },
  {
   "id": "ga:goalValueAllPerSearch",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Internal Search",
    "status": "PUBLIC",
    "uiName": "Per Search Goal Value",
    "description": "The average goal value of a search on your property.",
    "calculation": "ga:goalValueAll / ga:searchUniques"
   }
  },
  {
   "id": "ga:pageLoadTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Page Load Time (ms)",
    "description": "Total Page Load Time is the amount of time (in milliseconds) it takes for pages from the sample set to load, from initiation of the pageview (e.g. click on a page link) to load completion in the browser."
   }
  },
  {
   "id": "ga:pageLoadSample",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Page Load Sample",
    "description": "The sample set (or count) of pageviews used to calculate the average page load time."
   }
  },
  {
   "id": "ga:avgPageLoadTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Avg. Page Load Time (sec)",
    "description": "The average amount of time (in seconds) it takes for pages from the sample set to load, from initiation of the pageview (e.g. click on a page link) to load completion in the browser.",
    "calculation": "(ga:pageLoadTime / ga:pageLoadSample / 1000)"
   }
  },
  {
   "id": "ga:domainLookupTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Domain Lookup Time (ms)",
    "description": "The total amount of time (in milliseconds) spent in DNS lookup for this page among all samples."
   }
  },
  {
   "id": "ga:avgDomainLookupTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Avg. Domain Lookup Time (sec)",
    "description": "The average amount of time (in seconds) spent in DNS lookup for this page.",
    "calculation": "(ga:domainLookupTime / ga:speedMetricsSample / 1000)"
   }
  },
  {
   "id": "ga:pageDownloadTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Page Download Time (ms)",
    "description": "The total amount of time (in milliseconds) to download this page among all samples."
   }
  },
  {
   "id": "ga:avgPageDownloadTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Avg. Page Download Time (sec)",
    "description": "The average amount of time (in seconds) to download this page.",
    "calculation": "(ga:pageDownloadTime / ga:speedMetricsSample / 1000)"
   }
  },
  {
   "id": "ga:redirectionTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Redirection Time (ms)",
    "description": "The total amount of time (in milliseconds) spent in redirects before fetching this page among all samples. If there are no redirects, the value for this metric is expected to be 0."
   }
  },
  {
   "id": "ga:avgRedirectionTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Avg. Redirection Time (sec)",
    "description": "The average amount of time (in seconds) spent in redirects before fetching this page. If there are no redirects, the value for this metric is expected to be 0.",
    "calculation": "(ga:redirectionTime / ga:speedMetricsSample / 1000)"
   }
  },
  {
   "id": "ga:serverConnectionTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Server Connection Time (ms)",
    "description": "The total amount of time (in milliseconds) spent in establishing TCP connection for this page among all samples."
   }
  },
  {
   "id": "ga:avgServerConnectionTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Avg. Server Connection Time (sec)",
    "description": "The average amount of time (in seconds) spent in establishing TCP connection for this page.",
    "calculation": "(ga:serverConnectionTime / ga:speedMetricsSample / 1000)"
   }
  },
  {
   "id": "ga:serverResponseTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Server Response Time (ms)",
    "description": "The total amount of time (in milliseconds) your server takes to respond to a user request among all samples, including the network time from user's location to your server."
   }
  },
  {
   "id": "ga:avgServerResponseTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Avg. Server Response Time (sec)",
    "description": "The average amount of time (in seconds) your server takes to respond to a user request, including the network time from user's location to your server.",
    "calculation": "(ga:serverResponseTime / ga:speedMetricsSample / 1000)"
   }
  },
  {
   "id": "ga:speedMetricsSample",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Speed Metrics Sample",
    "description": "The sample set (or count) of pageviews used to calculate the averages for site speed metrics. This metric is used in all site speed average calculations including avgDomainLookupTime, avgPageDownloadTime, avgRedirectionTime, avgServerConnectionTime, and avgServerResponseTime."
   }
  },
  {
   "id": "ga:domInteractiveTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Document Interactive Time (ms)",
    "description": "The time the browser takes (in milliseconds) to parse the document (DOMInteractive), including the network time from the user's location to your server. At this time, the user can interact with the Document Object Model even though it is not fully loaded."
   }
  },
  {
   "id": "ga:avgDomInteractiveTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Avg. Document Interactive Time (sec)",
    "description": "The average time (in seconds) it takes the browser to parse the document and execute deferred and parser-inserted scripts including the network time from the user's location to your server.",
    "calculation": "(ga:domInteractiveTime / ga:domLatencyMetricsSample / 1000)"
   }
  },
  {
   "id": "ga:domContentLoadedTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Document Content Loaded Time (ms)",
    "description": "The time the browser takes (in milliseconds) to parse the document and execute deferred and parser-inserted scripts (DOMContentLoaded), including the network time from the user's location to your server. Parsing of the document is finished, the Document Object Model is ready, but referenced style sheets, images, and subframes may not be finished loading. This event is often the starting point for javascript framework execution, e.g., JQuery's onready() callback, etc."
   }
  },
  {
   "id": "ga:avgDomContentLoadedTime",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "Avg. Document Content Loaded Time (sec)",
    "description": "The average time (in seconds) it takes the browser to parse the document.",
    "calculation": "(ga:domContentLoadedTime / ga:domLatencyMetricsSample / 1000)"
   }
  },
  {
   "id": "ga:domLatencyMetricsSample",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Site Speed",
    "status": "PUBLIC",
    "uiName": "DOM Latency Metrics Sample",
    "description": "The sample set (or count) of pageviews used to calculate the averages for site speed DOM metrics. This metric is used in the avgDomContentLoadedTime and avgDomInteractiveTime calculations."
   }
  },
  {
   "id": "ga:appInstallerId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "App Installer ID",
    "description": "ID of the installer (e.g., Google Play Store) from which the app was downloaded. By default, the app installer id is set based on the PackageManager#getInstallerPackageName method.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:appVersion",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "App Version",
    "description": "The version of the application.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:appName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "App Name",
    "description": "The name of the application.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:appId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "App ID",
    "description": "The ID of the application.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:screenName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Screen Name",
    "description": "The name of the screen.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:screenDepth",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Screen Depth",
    "description": "The number of screenviews per session reported as a string. Can be useful for historgrams.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:landingScreenName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Landing Screen",
    "description": "The name of the first screen viewed.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:exitScreenName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Exit Screen",
    "description": "The name of the screen when the user exited the application.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:screenviews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Screen Views",
    "description": "The total number of screenviews.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:appviews",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:screenviews",
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "App Tracking",
    "status": "DEPRECATED",
    "uiName": "Screen Views",
    "description": "The total number of screenviews.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:uniqueScreenviews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Unique Screen Views",
    "description": "The number of different (unique) screenviews within a session.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:uniqueAppviews",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:uniqueScreenviews",
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "App Tracking",
    "status": "DEPRECATED",
    "uiName": "Unique Screen Views",
    "description": "The number of different (unique) screenviews within a session.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:screenviewsPerSession",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Screens / Session",
    "description": "The average number of screenviews per session.",
    "calculation": "ga:screenviews / ga:sessions"
   }
  },
  {
   "id": "ga:appviewsPerVisit",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:screenviewsPerSession",
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "App Tracking",
    "status": "DEPRECATED",
    "uiName": "Screens / Session",
    "description": "The average number of screenviews per session.",
    "calculation": "ga:screenviews / ga:sessions"
   }
  },
  {
   "id": "ga:timeOnScreen",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "TIME",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Time on Screen",
    "description": "The time spent viewing the current screen.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:avgScreenviewDuration",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "TIME",
    "group": "App Tracking",
    "status": "PUBLIC",
    "uiName": "Avg. Time on Screen",
    "description": "The average amount of time users spent on a screen in seconds."
   }
  },
  {
   "id": "ga:eventCategory",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Event Category",
    "description": "The category of the event.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:eventAction",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Event Action",
    "description": "The action of the event.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:eventLabel",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Event Label",
    "description": "The label of the event.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:totalEvents",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Total Events",
    "description": "The total number of events for the profile, across all categories.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:uniqueEvents",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Unique Events",
    "description": "The total number of unique events for the profile, across all categories."
   }
  },
  {
   "id": "ga:eventValue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Event Value",
    "description": "The total value of events for the profile.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:avgEventValue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Avg. Value",
    "description": "The average value of an event.",
    "calculation": "ga:eventValue / ga:totalEvents"
   }
  },
  {
   "id": "ga:sessionsWithEvent",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Sessions with Event",
    "description": "The total number of sessions with events.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:visitsWithEvent",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:sessionsWithEvent",
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Event Tracking",
    "status": "DEPRECATED",
    "uiName": "Sessions with Event",
    "description": "The total number of sessions with events.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:eventsPerSessionWithEvent",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Event Tracking",
    "status": "PUBLIC",
    "uiName": "Events / Session with Event",
    "description": "The average number of events per session with event.",
    "calculation": "ga:totalEvents / ga:sessionsWithEvent"
   }
  },
  {
   "id": "ga:eventsPerVisitWithEvent",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:eventsPerSessionWithEvent",
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Event Tracking",
    "status": "DEPRECATED",
    "uiName": "Events / Session with Event",
    "description": "The average number of events per session with event.",
    "calculation": "ga:totalEvents / ga:sessionsWithEvent"
   }
  },
  {
   "id": "ga:transactionId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Transaction ID",
    "description": "The transaction ID for the shopping cart purchase as supplied by your ecommerce tracking method.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:affiliation",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Affiliation",
    "description": "Typically used to designate a supplying company or brick and mortar location; product affiliation.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:sessionsToTransaction",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Sessions to Transaction",
    "description": "The number of sessions between users' purchases and the related campaigns that lead to the purchases.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:visitsToTransaction",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:sessionsToTransaction",
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "DEPRECATED",
    "uiName": "Sessions to Transaction",
    "description": "The number of sessions between users' purchases and the related campaigns that lead to the purchases.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:daysToTransaction",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Days to Transaction",
    "description": "The number of days between users' purchases and the related campaigns that lead to the purchases.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productSku",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product SKU",
    "description": "The product sku for purchased items as you have defined them in your ecommerce tracking application.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product",
    "description": "The product name for purchased items as supplied by your ecommerce tracking application.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productCategory",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Category",
    "description": "Any product variations (size, color) for purchased items as supplied by your ecommerce application. Not compatible with Enhanced Ecommerce.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:currencyCode",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Currency Code",
    "description": "The local currency code of the transaction based on ISO 4217 standard."
   }
  },
  {
   "id": "ga:transactions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Transactions",
    "description": "The total number of transactions.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:transactionsPerSession",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Ecommerce Conversion Rate",
    "description": "The average number of transactions for a session on your property.",
    "calculation": "ga:transactions / ga:sessions"
   }
  },
  {
   "id": "ga:transactionsPerVisit",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:transactionsPerSession",
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Ecommerce",
    "status": "DEPRECATED",
    "uiName": "Ecommerce Conversion Rate",
    "description": "The average number of transactions for a session on your property.",
    "calculation": "ga:transactions / ga:sessions"
   }
  },
  {
   "id": "ga:transactionRevenue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Revenue",
    "description": "The total sale revenue provided in the transaction excluding shipping and tax.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:revenuePerTransaction",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Average Order Value",
    "description": "The average revenue for an e-commerce transaction.",
    "calculation": "ga:transactionRevenue / ga:transactions"
   }
  },
  {
   "id": "ga:transactionRevenuePerSession",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Per Session Value",
    "description": "Average transaction revenue for a session on your property.",
    "calculation": "ga:transactionRevenue / ga:sessions"
   }
  },
  {
   "id": "ga:transactionRevenuePerVisit",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:transactionRevenuePerSession",
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "DEPRECATED",
    "uiName": "Per Session Value",
    "description": "Average transaction revenue for a session on your property.",
    "calculation": "ga:transactionRevenue / ga:sessions"
   }
  },
  {
   "id": "ga:transactionShipping",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Shipping",
    "description": "The total cost of shipping.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:transactionTax",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Tax",
    "description": "The total amount of tax.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:totalValue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Total Value",
    "description": "Total value for your property (including total revenue and total goal value).",
    "calculation": "(ga:transactionRevenue + ga:goalValueAll)"
   }
  },
  {
   "id": "ga:itemQuantity",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Quantity",
    "description": "The total number of items purchased. For example, if users purchase 2 frisbees and 5 tennis balls, 7 items have been purchased.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:uniquePurchases",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Unique Purchases",
    "description": "The number of product sets purchased. For example, if users purchase 2 frisbees and 5 tennis balls from your site, 2 unique products have been purchased.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:revenuePerItem",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Average Price",
    "description": "The average revenue per item.",
    "calculation": "ga:itemRevenue / ga:itemQuantity"
   }
  },
  {
   "id": "ga:itemRevenue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Revenue",
    "description": "The total revenue from purchased product items on your property.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:itemsPerPurchase",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Average QTY",
    "description": "The average quantity of this item (or group of items) sold per purchase.",
    "calculation": "ga:itemQuantity / ga:uniquePurchases"
   }
  },
  {
   "id": "ga:localTransactionRevenue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Local Revenue",
    "description": "Transaction revenue in local currency."
   }
  },
  {
   "id": "ga:localTransactionShipping",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Local Shipping",
    "description": "Transaction shipping cost in local currency."
   }
  },
  {
   "id": "ga:localTransactionTax",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Local Tax",
    "description": "Transaction tax in local currency."
   }
  },
  {
   "id": "ga:localItemRevenue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Local Product Revenue",
    "description": "Product revenue in local currency.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:socialInteractionNetwork",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Interactions",
    "status": "PUBLIC",
    "uiName": "Social Source",
    "description": "For social interactions, a value representing the social network being tracked."
   }
  },
  {
   "id": "ga:socialInteractionAction",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Interactions",
    "status": "PUBLIC",
    "uiName": "Social Action",
    "description": "For social interactions, a value representing the social action being tracked (e.g. +1, bookmark)"
   }
  },
  {
   "id": "ga:socialInteractionNetworkAction",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Interactions",
    "status": "PUBLIC",
    "uiName": "Social Source and Action",
    "description": "For social interactions, a value representing the concatenation of the socialInteractionNetwork and socialInteractionAction action being tracked at this hit level (e.g. Google: +1)"
   }
  },
  {
   "id": "ga:socialInteractionTarget",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Interactions",
    "status": "PUBLIC",
    "uiName": "Social Entity",
    "description": "For social interactions, a value representing the URL (or resource) which receives the social network action."
   }
  },
  {
   "id": "ga:socialEngagementType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Social Interactions",
    "status": "PUBLIC",
    "uiName": "Social Type",
    "description": "Engagement type. Possible values are \"Socially Engaged\" or \"Not Socially Engaged\"."
   }
  },
  {
   "id": "ga:socialInteractions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Social Interactions",
    "status": "PUBLIC",
    "uiName": "Social Actions",
    "description": "The total number of social interactions on your property."
   }
  },
  {
   "id": "ga:uniqueSocialInteractions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Social Interactions",
    "status": "PUBLIC",
    "uiName": "Unique Social Actions",
    "description": "The number of sessions during which the specified social action(s) occurred at least once. This is based on the the unique combination of socialInteractionNetwork, socialInteractionAction, and socialInteractionTarget."
   }
  },
  {
   "id": "ga:socialInteractionsPerSession",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Social Interactions",
    "status": "PUBLIC",
    "uiName": "Actions Per Social Session",
    "description": "The number of social interactions per session on your property.",
    "calculation": "ga:socialInteractions / ga:uniqueSocialInteractions"
   }
  },
  {
   "id": "ga:socialInteractionsPerVisit",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:socialInteractionsPerSession",
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "Social Interactions",
    "status": "DEPRECATED",
    "uiName": "Actions Per Social Session",
    "description": "The number of social interactions per session on your property.",
    "calculation": "ga:socialInteractions / ga:uniqueSocialInteractions"
   }
  },
  {
   "id": "ga:userTimingCategory",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User Timings",
    "status": "PUBLIC",
    "uiName": "Timing Category",
    "description": "A string for categorizing all user timing variables into logical groups for easier reporting purposes.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:userTimingLabel",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User Timings",
    "status": "PUBLIC",
    "uiName": "Timing Label",
    "description": "The name of the resource's action being tracked.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:userTimingVariable",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "User Timings",
    "status": "PUBLIC",
    "uiName": "Timing Variable",
    "description": "A value that can be used to add flexibility in visualizing user timings in the reports.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:userTimingValue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "User Timings",
    "status": "PUBLIC",
    "uiName": "User Timing (ms)",
    "description": "The total number of milliseconds for a user timing."
   }
  },
  {
   "id": "ga:userTimingSample",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "User Timings",
    "status": "PUBLIC",
    "uiName": "User Timing Sample",
    "description": "The number of hits that were sent for a particular userTimingCategory, userTimingLabel, and userTimingVariable."
   }
  },
  {
   "id": "ga:avgUserTimingValue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "FLOAT",
    "group": "User Timings",
    "status": "PUBLIC",
    "uiName": "Avg. User Timing (sec)",
    "description": "The average amount of elapsed time.",
    "calculation": "(ga:userTimingValue / ga:userTimingSample / 1000)"
   }
  },
  {
   "id": "ga:exceptionDescription",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Exceptions",
    "status": "PUBLIC",
    "uiName": "Exception Description",
    "description": "The description for the exception.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:exceptions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Exceptions",
    "status": "PUBLIC",
    "uiName": "Exceptions",
    "description": "The number of exceptions that were sent to Google Analytics.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:exceptionsPerScreenview",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Exceptions",
    "status": "PUBLIC",
    "uiName": "Exceptions / Screen",
    "description": "The number of exceptions thrown divided by the number of screenviews.",
    "calculation": "ga:exceptions / ga:screenviews"
   }
  },
  {
   "id": "ga:fatalExceptions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Exceptions",
    "status": "PUBLIC",
    "uiName": "Crashes",
    "description": "The number of exceptions where isFatal is set to true.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:fatalExceptionsPerScreenview",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Exceptions",
    "status": "PUBLIC",
    "uiName": "Crashes / Screen",
    "description": "The number of fatal exceptions thrown divided by the number of screenviews.",
    "calculation": "ga:fatalExceptions / ga:screenviews"
   }
  },
  {
   "id": "ga:experimentId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Content Experiments",
    "status": "PUBLIC",
    "uiName": "Experiment ID",
    "description": "The user-scoped id of the content experiment that the user was exposed to when the metrics were reported.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:experimentVariant",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Content Experiments",
    "status": "PUBLIC",
    "uiName": "Variation",
    "description": "The user-scoped id of the particular variation that the user was exposed to during a content experiment.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:dimensionXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Custom Variables or Columns",
    "status": "PUBLIC",
    "uiName": "Custom Dimension XX",
    "description": "The name of the requested custom dimension, where XX refers the number/index of the custom dimension.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20",
    "premiumMinTemplateIndex": "1",
    "premiumMaxTemplateIndex": "200",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:customVarNameXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Custom Variables or Columns",
    "status": "PUBLIC",
    "uiName": "Custom Variable (Key XX)",
    "description": "The name for the requested custom variable.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "5",
    "premiumMinTemplateIndex": "1",
    "premiumMaxTemplateIndex": "50",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:metricXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Custom Variables or Columns",
    "status": "PUBLIC",
    "uiName": "Custom Metric XX Value",
    "description": "The name of the requested custom metric, where XX refers the number/index of the custom metric.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "20",
    "premiumMinTemplateIndex": "1",
    "premiumMaxTemplateIndex": "200",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:customVarValueXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Custom Variables or Columns",
    "status": "PUBLIC",
    "uiName": "Custom Variable (Value XX)",
    "description": "The value for the requested custom variable.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "5",
    "premiumMinTemplateIndex": "1",
    "premiumMaxTemplateIndex": "50",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:date",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Date",
    "description": "The date of the session formatted as YYYYMMDD."
   }
  },
  {
   "id": "ga:year",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Year",
    "description": "The year of the session. A four-digit year from 2005 to the current year."
   }
  },
  {
   "id": "ga:month",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Month of the year",
    "description": "The month of the session. A two digit integer from 01 to 12."
   }
  },
  {
   "id": "ga:week",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Week of the Year",
    "description": "The week of the session. A two-digit number from 01 to 53. Each week starts on Sunday."
   }
  },
  {
   "id": "ga:day",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Day of the month",
    "description": "The day of the month. A two-digit number from 01 to 31."
   }
  },
  {
   "id": "ga:hour",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Hour",
    "description": "A two-digit hour of the day ranging from 00-23 in the timezone configured for the account. This value is also corrected for daylight savings time, adhering to all local rules for daylight savings time. If your timezone follows daylight savings time, there will be an apparent bump in the number of sessions during the change-over hour (e.g. between 1:00 and 2:00) for the day per year when that hour repeats. A corresponding hour with zero sessions will occur at the opposite changeover. (Google Analytics does not track user time more precisely than hours.)",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:minute",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Minute",
    "description": "Returns the minute in the hour. The possible values are between 00 and 59.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:nthMonth",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Month Index",
    "description": "Index for each month in the specified date range. Index for the first month in the date range is 0, 1 for the second month, and so on. The index corresponds to month entries."
   }
  },
  {
   "id": "ga:nthWeek",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Week Index",
    "description": "Index for each week in the specified date range. Index for the first week in the date range is 0, 1 for the second week, and so on. The index corresponds to week entries."
   }
  },
  {
   "id": "ga:nthDay",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Day Index",
    "description": "Index for each day in the specified date range. Index for the first day (i.e., start-date) in the date range is 0, 1 for the second day, and so on."
   }
  },
  {
   "id": "ga:nthMinute",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Minute Index",
    "description": "Index for each minute in the specified date range. Index for the first minute of first day (i.e., start-date) in the date range is 0, 1 for the next minute, and so on."
   }
  },
  {
   "id": "ga:dayOfWeek",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Day of Week",
    "description": "The day of the week. A one-digit number from 0 (Sunday) to 6 (Saturday)."
   }
  },
  {
   "id": "ga:dayOfWeekName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Day of Week Name",
    "description": "The name of the day of the week (in English)."
   }
  },
  {
   "id": "ga:dateHour",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Hour of Day",
    "description": "Combined values of ga:date and ga:hour."
   }
  },
  {
   "id": "ga:yearMonth",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Month of Year",
    "description": "Combined values of ga:year and ga:month."
   }
  },
  {
   "id": "ga:yearWeek",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Week of Year",
    "description": "Combined values of ga:year and ga:week."
   }
  },
  {
   "id": "ga:isoWeek",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "ISO Week of the Year",
    "description": "The ISO week number, where each week starts with a Monday. Details: http://en.wikipedia.org/wiki/ISO_week_date. ga:isoWeek should only be used with ga:isoYear since ga:year represents gregorian calendar."
   }
  },
  {
   "id": "ga:isoYear",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "ISO Year",
    "description": "The ISO year of the session. Details: http://en.wikipedia.org/wiki/ISO_week_date. ga:isoYear should only be used with ga:isoWeek since ga:week represents gregorian calendar."
   }
  },
  {
   "id": "ga:isoYearIsoWeek",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "ISO Week of ISO Year",
    "description": "Combined values of ga:isoYear and ga:isoWeek."
   }
  },
  {
   "id": "ga:dcmClickAd",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Ad (GA Model)",
    "description": "DCM ad name of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickAdId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Ad ID (GA Model)",
    "description": "DCM ad ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickAdType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Ad Type (GA Model)",
    "description": "DCM ad type name of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickAdTypeId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Ad Type ID",
    "description": "DCM ad type ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickAdvertiser",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Advertiser (GA Model)",
    "description": "DCM advertiser name of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickAdvertiserId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Advertiser ID (GA Model)",
    "description": "DCM advertiser ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickCampaign",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Campaign (GA Model)",
    "description": "DCM campaign name of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickCampaignId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Campaign ID (GA Model)",
    "description": "DCM campaign ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickCreativeId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative ID (GA Model)",
    "description": "DCM creative ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickCreative",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative (GA Model)",
    "description": "DCM creative name of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickRenderingId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Rendering ID (GA Model)",
    "description": "DCM rendering ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickCreativeType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative Type (GA Model)",
    "description": "DCM creative type name of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickCreativeTypeId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative Type ID (GA Model)",
    "description": "DCM creative type ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickCreativeVersion",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative Version (GA Model)",
    "description": "DCM creative version of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickSite",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Site (GA Model)",
    "description": "Site name where the DCM creative was shown and clicked on for the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickSiteId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Site ID (GA Model)",
    "description": "DCM site ID where the DCM creative was shown and clicked on for the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickSitePlacement",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Placement (GA Model)",
    "description": "DCM site placement name of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickSitePlacementId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Placement ID (GA Model)",
    "description": "DCM site placement ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmClickSpotId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Floodlight Configuration ID (GA Model)",
    "description": "DCM Floodlight configuration ID of the DCM click matching the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightActivity",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Activity",
    "description": "DCM Floodlight activity name associated with the floodlight conversion (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightActivityAndGroup",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Activity and Group",
    "description": "DCM Floodlight activity name and group name associated with the floodlight conversion (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightActivityGroup",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Activity Group",
    "description": "DCM Floodlight activity group name associated with the floodlight conversion (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightActivityGroupId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Activity Group ID",
    "description": "DCM Floodlight activity group ID associated with the floodlight conversion (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightActivityId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Activity ID",
    "description": "DCM Floodlight activity ID associated with the floodlight conversion (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightAdvertiserId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Advertiser ID",
    "description": "DCM Floodlight advertiser ID associated with the floodlight conversion (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightSpotId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Floodlight Configuration ID",
    "description": "DCM Floodlight configuration ID associated with the floodlight conversion (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventAd",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Ad",
    "description": "DCM ad name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventAdId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Ad ID (DFA Model)",
    "description": "DCM ad ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventAdType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Ad Type (DFA Model)",
    "description": "DCM ad type name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventAdTypeId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Ad Type ID (DFA Model)",
    "description": "DCM ad type ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventAdvertiser",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Advertiser (DFA Model)",
    "description": "DCM advertiser name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventAdvertiserId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Advertiser ID (DFA Model)",
    "description": "DCM advertiser ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventAttributionType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Attribution Type (DFA Model)",
    "description": "There are two possible values: ClickThrough and ViewThrough. If the last DCM event associated with the Google Analytics session was a click, then the value will be ClickThrough. If the last DCM event associated with the Google Analytics session was an ad impression, then the value will be ViewThrough (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventCampaign",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Campaign (DFA Model)",
    "description": "DCM campaign name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventCampaignId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Campaign ID (DFA Model)",
    "description": "DCM campaign ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventCreativeId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative ID (DFA Model)",
    "description": "DCM creative ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventCreative",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative (DFA Model)",
    "description": "DCM creative name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventRenderingId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Rendering ID (DFA Model)",
    "description": "DCM rendering ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventCreativeType",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative Type (DFA Model)",
    "description": "DCM creative type name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventCreativeTypeId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative Type ID (DFA Model)",
    "description": "DCM creative type ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventCreativeVersion",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Creative Version (DFA Model)",
    "description": "DCM creative version of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventSite",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Site (DFA Model)",
    "description": "Site name where the DCM creative was shown and clicked on for the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventSiteId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Site ID (DFA Model)",
    "description": "DCM site ID where the DCM creative was shown and clicked on for the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventSitePlacement",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Placement (DFA Model)",
    "description": "DCM site placement name of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventSitePlacementId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Placement ID (DFA Model)",
    "description": "DCM site placement ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmLastEventSpotId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Floodlight Configuration ID (DFA Model)",
    "description": "DCM Floodlight configuration ID of the last DCM event (impression or click within the DCM lookback window) associated with the Google Analytics session (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightQuantity",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Conversions",
    "description": "The number of DCM Floodlight conversions (premium only)."
   }
  },
  {
   "id": "ga:dcmFloodlightRevenue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Revenue",
    "description": "DCM Floodlight revenue (premium only)."
   }
  },
  {
   "id": "ga:landingContentGroupXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Content Grouping",
    "status": "PUBLIC",
    "uiName": "Landing Page Group XX",
    "description": "The first matching content group in a user's session.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "5",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:previousContentGroupXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Content Grouping",
    "status": "PUBLIC",
    "uiName": "Previous Page Group XX",
    "description": "Refers to content group that was visited before another content group.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "5",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:contentGroupXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Content Grouping",
    "status": "PUBLIC",
    "uiName": "Page Group XX",
    "description": "Content group on a property. A content group is a collection of content providing a logical structure that can be determined by tracking code or page title/url regex match, or predefined rules.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "5",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:nextContentGroupXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Content Grouping",
    "status": "PUBLIC",
    "uiName": "Next Page Group XX",
    "description": "Refers to content group that was visited after another content group.",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "5",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:userAgeBracket",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Audience",
    "status": "PUBLIC",
    "uiName": "Age",
    "description": "Age bracket of user.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:visitorAgeBracket",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:userAgeBracket",
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Audience",
    "status": "DEPRECATED",
    "uiName": "Age",
    "description": "Age bracket of user.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:userGender",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Audience",
    "status": "PUBLIC",
    "uiName": "Gender",
    "description": "Gender of user.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:visitorGender",
   "kind": "analytics#column",
   "attributes": {
    "replacedBy": "ga:userGender",
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Audience",
    "status": "DEPRECATED",
    "uiName": "Gender",
    "description": "Gender of user.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:interestOtherCategory",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Audience",
    "status": "PUBLIC",
    "uiName": "Other Category",
    "description": "Indicates that users are more likely to be interested in learning about the specified category, and more likely to be ready to purchase.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:interestAffinityCategory",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Audience",
    "status": "PUBLIC",
    "uiName": "Affinity Category (reach)",
    "description": "Indicates that users are more likely to be interested in learning about the specified category.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:interestInMarketCategory",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Audience",
    "status": "PUBLIC",
    "uiName": "In-Market Segment",
    "description": "Indicates that users are more likely to be ready to purchase products or services in the specified category.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adsenseRevenue",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense Revenue",
    "description": "The total revenue from AdSense ads.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adsenseAdUnitsViewed",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense Ad Units Viewed",
    "description": "The number of AdSense ad units viewed. An Ad unit is a set of ads displayed as a result of one piece of the AdSense ad code. Details: https://support.google.com/adsense/answer/32715?hl=en",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adsenseAdsViewed",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense Impressions",
    "description": "The number of AdSense ads viewed. Multiple ads can be displayed within an Ad Unit.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adsenseAdsClicks",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense Ads Clicked",
    "description": "The number of times AdSense ads on your site were clicked.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adsensePageImpressions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense Page Impressions",
    "description": "The number of pageviews during which an AdSense ad was displayed. A page impression can have multiple Ad Units.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adsenseCTR",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense CTR",
    "description": "The percentage of page impressions that resulted in a click on an AdSense ad.",
    "calculation": "ga:adsenseAdsClicks/ga:adsensePageImpressions"
   }
  },
  {
   "id": "ga:adsenseECPM",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense eCPM",
    "description": "The estimated cost per thousand page impressions. It is your AdSense Revenue per 1000 page impressions.",
    "calculation": "ga:adsenseRevenue/(ga:adsensePageImpressions/1000)"
   }
  },
  {
   "id": "ga:adsenseExits",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense Exits",
    "description": "The number of sessions that ended due to a user clicking on an AdSense ad.",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:adsenseViewableImpressionPercent",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense Viewable Impression %",
    "description": "The percentage of impressions that were viewable."
   }
  },
  {
   "id": "ga:adsenseCoverage",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Adsense",
    "status": "PUBLIC",
    "uiName": "AdSense Coverage",
    "description": "The percentage of ad requests that returned at least one ad."
   }
  },
  {
   "id": "ga:campaignCode",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Traffic Sources",
    "status": "PUBLIC",
    "uiName": "Campaign Code",
    "description": "When using manual campaign tracking, the value of the utm_id campaign tracking parameter."
   }
  },
  {
   "id": "ga:channelGrouping",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Channel Grouping",
    "status": "PUBLIC",
    "uiName": "Default Channel Grouping",
    "description": "The default channel grouping that is shared within the View (Profile).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:checkoutOptions",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Checkout Options",
    "description": "User options specified during the checkout process, e.g., FedEx, DHL, UPS for delivery options or Visa, MasterCard, AmEx for payment options. This dimension should be used along with ga:shoppingStage (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:correlationModelId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Correlation Model ID",
    "description": "Correlation Model ID for related products."
   }
  },
  {
   "id": "ga:internalPromotionCreative",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Internal Promotion Creative",
    "description": "The creative content designed for a promotion (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:internalPromotionId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Internal Promotion ID",
    "description": "The ID of the promotion (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:internalPromotionName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Internal Promotion Name",
    "description": "The name of the promotion (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:internalPromotionPosition",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Internal Promotion Position",
    "description": "The position of the promotion on the web page or application screen (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:isTrueViewVideoAd",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Adwords",
    "status": "PUBLIC",
    "uiName": "TrueView Video Ad",
    "description": "'Yes' or 'No' - Indicates whether the ad is an AdWords TrueView video ad."
   }
  },
  {
   "id": "ga:nthHour",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Time",
    "status": "PUBLIC",
    "uiName": "Hour Index",
    "description": "Index for each hour in the specified date range. Index for the first hour of first day (i.e., start-date) in the date range is 0, 1 for the next hour, and so on."
   }
  },
  {
   "id": "ga:orderCouponCode",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Order Coupon Code",
    "description": "Code for the order-level coupon (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productBrand",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Brand",
    "description": "The brand name under which the product is sold (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productCategoryHierarchy",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Category (Enhanced Ecommerce)",
    "description": "The hierarchical category in which the product is classified (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productCategoryLevelXX",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Category Level XX",
    "description": "Level (1-5) in the product category hierarchy, starting from the top (Enhanced Ecommerce).",
    "minTemplateIndex": "1",
    "maxTemplateIndex": "5",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productCouponCode",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Coupon Code",
    "description": "Code for the product-level coupon (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productListName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product List Name",
    "description": "The name of the product list in which the product appears (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productListPosition",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product List Position",
    "description": "The position of the product in the product list (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productVariant",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Variant",
    "description": "The specific variation of a product, e.g., XS, S, M, L for size or Red, Blue, Green, Black for color (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:queryProductId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Queried Product ID",
    "description": "ID of the product being queried."
   }
  },
  {
   "id": "ga:queryProductName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Queried Product Name",
    "description": "Name of the product being queried."
   }
  },
  {
   "id": "ga:queryProductVariation",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Queried Product Variation",
    "description": "Variation of the product being queried."
   }
  },
  {
   "id": "ga:relatedProductId",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Related Product ID",
    "description": "ID of the related product."
   }
  },
  {
   "id": "ga:relatedProductName",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Related Product Name",
    "description": "Name of the related product."
   }
  },
  {
   "id": "ga:relatedProductVariation",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Related Product Variation",
    "description": "Variation of the related product."
   }
  },
  {
   "id": "ga:shoppingStage",
   "kind": "analytics#column",
   "attributes": {
    "type": "DIMENSION",
    "dataType": "STRING",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Shopping Stage",
    "description": "Various stages of the shopping experience that users completed in a session, e.g., PRODUCT_VIEW, ADD_TO_CART, CHECKOUT, etc. (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:buyToDetailRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Buy-to-Detail Rate",
    "description": "Unique purchases divided by views of product detail pages (Enhanced Ecommerce)."
   }
  },
  {
   "id": "ga:cartToDetailRate",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Cart-to-Detail Rate",
    "description": "Product adds divided by views of product details (Enhanced Ecommerce)."
   }
  },
  {
   "id": "ga:correlationScore",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Correlation Score",
    "description": "Correlation Score for related products."
   }
  },
  {
   "id": "ga:dcmCPC",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA CPC",
    "description": "DCM Cost Per Click (premium only)."
   }
  },
  {
   "id": "ga:dcmCTR",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA CTR",
    "description": "DCM Click Through Rate (premium only)."
   }
  },
  {
   "id": "ga:dcmClicks",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Clicks",
    "description": "DCM Total Clicks (premium only)."
   }
  },
  {
   "id": "ga:dcmCost",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Cost",
    "description": "DCM Total Cost (premium only)."
   }
  },
  {
   "id": "ga:dcmImpressions",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Impressions",
    "description": "DCM Total Impressions (premium only)."
   }
  },
  {
   "id": "ga:dcmMargin",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA Margin",
    "description": "DCM Margin (premium only)."
   }
  },
  {
   "id": "ga:dcmROI",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA ROI",
    "description": "DCM Return On Investment (premium only)."
   }
  },
  {
   "id": "ga:dcmRPC",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "DoubleClick Campaign Manager",
    "status": "PUBLIC",
    "uiName": "DFA RPC",
    "description": "DCM Revenue Per Click (premium only)."
   }
  },
  {
   "id": "ga:hits",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Session",
    "status": "PUBLIC",
    "uiName": "Hits",
    "description": "Total number of hits sent to Google Analytics. This metric sums all hit types (e.g. pageview, event, timing, etc.).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:internalPromotionCTR",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Internal Promotion CTR",
    "description": "The rate at which users clicked through to view the internal promotion (ga:internalPromotionClicks / ga:internalPromotionViews) - (Enhanced Ecommerce).",
    "calculation": "ga:internalPromotionClicks / ga:internalPromotionViews"
   }
  },
  {
   "id": "ga:internalPromotionClicks",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Internal Promotion Clicks",
    "description": "The number of clicks on an internal promotion (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:internalPromotionViews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Internal Promotion Views",
    "description": "The number of views of an internal promotion (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:localProductRefundAmount",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Local Product Refund Amount",
    "description": "Refund amount for a given product in the local currency (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:localRefundAmount",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Local Refund Amount",
    "description": "Total refund amount for the transaction in the local currency (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productAddsToCart",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Adds To Cart",
    "description": "Number of times the product was added to the shopping cart (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productCheckouts",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Checkouts",
    "description": "Number of times the product was included in the check-out process (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productDetailViews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Detail Views",
    "description": "Number of times users viewed the product-detail page (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productListCTR",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "PERCENT",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product List CTR",
    "description": "The rate at which users clicked through on the product in a product list (ga:productListClicks / ga:productListViews) - (Enhanced Ecommerce).",
    "calculation": "ga:productListClicks / ga:productListViews"
   }
  },
  {
   "id": "ga:productListClicks",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product List Clicks",
    "description": "Number of times users clicked the product when it appeared in the product list (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productListViews",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product List Views",
    "description": "Number of times the product appeared in a product list (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productRefundAmount",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Refund Amount",
    "description": "Total refund amount associated with the product (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productRefunds",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Refunds",
    "description": "Number of times a refund was issued for the product (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productRemovesFromCart",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Removes From Cart",
    "description": "Number of times the product was removed from shopping cart (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:productRevenuePerPurchase",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Product Revenue per Purchase",
    "description": "Average product revenue per purchase (commonly used with Product Coupon Code) (ga:itemRevenue / ga:uniquePurchases) - (Enhanced Ecommerce).",
    "calculation": "ga:itemRevenue / ga:uniquePurchases"
   }
  },
  {
   "id": "ga:quantityAddedToCart",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Quantity Added To Cart",
    "description": "Number of product units added to the shopping cart (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:quantityCheckedOut",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Quantity Checked Out",
    "description": "Number of product units included in check out (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:quantityRefunded",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Quantity Refunded",
    "description": "Number of product units refunded (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:quantityRemovedFromCart",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Quantity Removed From Cart",
    "description": "Number of product units removed from cart (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:queryProductQuantity",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Queried Product Quantity",
    "description": "Quantity of the product being queried."
   }
  },
  {
   "id": "ga:refundAmount",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "CURRENCY",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Refund Amount",
    "description": "Currency amount refunded for a transaction (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  },
  {
   "id": "ga:relatedProductQuantity",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Related Products",
    "status": "PUBLIC",
    "uiName": "Related Product Quantity",
    "description": "Quantity of the related product."
   }
  },
  {
   "id": "ga:totalRefunds",
   "kind": "analytics#column",
   "attributes": {
    "type": "METRIC",
    "dataType": "INTEGER",
    "group": "Ecommerce",
    "status": "PUBLIC",
    "uiName": "Refunds",
    "description": "Number of refunds that have been issued (Enhanced Ecommerce).",
    "allowedInSegments": "true"
   }
  }
 ]
}