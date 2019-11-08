import React, { ReactElement } from 'react';

import { Svg } from '../Svg';
import { defaultIconSize } from './constants';

const Fingerprint = <T extends {}>(props: T): ReactElement => (
  <Svg size={defaultIconSize} {...props} viewBox="0 0 20 20">
    <path d="M9.6795855,7.8502398c-0.3737011,0.09375-0.6062469,0.4970703-0.5193815,0.9003906c0.7166376,3.3271484,0.8731756,6.8144531,0.4515181,10.0849619c-0.0524817,0.4106445,0.2126379,0.7895508,0.5926733,0.8461914c0.0325747,0.0048828,0.0651484,0.0073242,0.096818,0.0073242c0.3411264,0,0.6388206-0.2714844,0.6876822-0.6464844c0.4442797-3.4511728,0.2805023-7.1274424-0.4750433-10.6318369C10.4269867,8.0064898,10.0532856,7.7584429,9.6795855,7.8502398z M8.0689611,12.0733843c-0.3818445,0.0380859-0.6632514,0.4033203-0.6279626,0.815918c0.1692061,1.9672852,0.1248689,3.9091806-0.1321073,5.7714853c-0.0561004,0.409668,0.2063046,0.7915039,0.5854349,0.8520508c0.0343838,0.0058594,0.068768,0.0083008,0.1031523,0.0083008c0.3384123,0,0.6352015-0.2675781,0.6867771-0.6396484c0.2723579-1.980957,0.3203154-4.0439463,0.1411562-6.1308603C8.790122,12.3380327,8.439043,12.0304155,8.0689611,12.0733843z M9.1583948,5.4142046c-0.783596,0.1967773-1.4495621,0.7114258-1.8757439,1.4487305C6.8564687,7.6012163,6.7225518,8.4727983,6.9044256,9.3165483c0.08777,0.409668,0.1673961,0.8198242,0.2370691,1.2294922c0.0678635,0.4077148,0.4388499,0.6767578,0.8080268,0.6025391c0.3782248-0.074707,0.6279626-0.4658203,0.5582891-0.8730469c-0.0732918-0.4321289-0.156538-0.8647461-0.2497368-1.2983398c-0.097723-0.4541016-0.0253363-0.9228516,0.2044945-1.3203125c0.2298307-0.3979492,0.5890541-0.6757812,1.0098076-0.78125c0.8722706-0.2192383,1.7418261,0.3706055,1.9436064,1.309082c0.7464972,3.4614258,0.9419441,6.9296875,0.5809107,10.309083c-0.0443373,0.4116211,0.2298307,0.7836914,0.6107702,0.8310547c0.0271454,0.003418,0.0542908,0.0048828,0.0805311,0.0048828c0.3483658,0,0.6487741-0.2817383,0.6894922-0.6640625c0.3791304-3.5507822,0.1746349-7.1914072-0.6080561-10.8203135C12.3950253,6.1026812,10.7789717,5.0118608,9.1583948,5.4142046z M6.7478876,5.9469194c0.2388787-0.3251953,0.1873026-0.796875-0.1140108-1.0537109c-0.302218-0.2573242-0.7383533-0.2001953-0.9754229,0.1230469C5.5363002,5.1827593,5.4222894,5.3580523,5.3173275,5.5396929c-0.753736,1.3056641-0.9917102,2.8481445-0.6686802,4.34375c0.5935779,2.7563477,0.7320194,5.5878906,0.400846,8.1889658c-0.0524807,0.4101562,0.2135434,0.7885742,0.5935783,0.8452148c0.0325747,0.0043945,0.0642443,0.0068359,0.0959134,0.0068359c0.3420315,0,0.6397257-0.2719727,0.6876826-0.6479492c0.3537941-2.7802744,0.2072091-5.7998056-0.4243727-8.7329111C5.7643209,8.4386187,5.9398608,7.2984819,6.4972453,6.3326616C6.5750618,6.197896,6.6583076,6.069478,6.7478876,5.9469194z M15.10956,12.8189898c-0.3827496,0.0205078-0.6786337,0.3720703-0.6596327,0.7861328c0.0633392,1.3837891,0.0434332,2.7739267-0.058814,4.1313486c-0.0316696,0.4130859,0.253356,0.7749023,0.6361055,0.8085938c0.019002,0.0014648,0.0380039,0.0024414,0.0570049,0.0024414c0.3583193,0,0.6623468-0.296875,0.6913023-0.6889648c0.1076765-1.4223633,0.1284876-2.8784189,0.0624342-4.3276377C15.8189583,13.1168413,15.4841652,12.8082476,15.10956,12.8189898z M14.9403534,11.7843218c0.0289555,0,0.05791-0.0019531,0.0868654-0.0058594c0.3809395-0.0507812,0.6505833-0.4257812,0.6035318-0.8364258c-0.1402512-1.2226562-0.3447466-2.4550781-0.6053419-3.6625977c-0.5528603-2.574707-2.7498236-4.4438477-5.22367-4.4438477c-0.390893,0-0.781786,0.0478516-1.1636305,0.1425781c-0.3157902,0.0791016-0.625248,0.1889648-0.9211321,0.3271484C7.3649917,3.4698689,7.2030244,3.9117634,7.3550382,4.291646C7.507957,4.6720171,7.9178519,4.8473101,8.2689314,4.682271c0.2189732-0.1025391,0.449708-0.184082,0.6822538-0.2426758c0.2777872-0.0688477,0.5637178-0.1040039,0.8505535-0.1040039c1.8341208,0,3.4610329,1.3803711,3.8700228,3.2836914c0.2497368,1.1572266,0.4451838,2.3374023,0.5800056,3.5073242C14.2951994,11.5064898,14.5947027,11.7843218,14.9403534,11.7843218z M17.282093,6.7164507c-0.3157921-1.4726562-1.0152359-2.8251951-2.0205193-3.913574c-0.2705488-0.2929688-0.7103033-0.2920532-0.9826622,0.0009155c-0.2723579,0.2924805-0.2723579,0.7734375-0.0018091,1.0664062c0.822504,0.8906248,1.3934612,2.0072629,1.6513424,3.2074583c0.6469641,3.003418,0.9365149,6.0850124,0.860507,9.0986834C16.7789993,16.5904026,17.0812168,17,17.4648705,17h0.0190029c0.3755093,0,0.684063-0.3749294,0.6949196-0.782156C18.257515,13.0757551,17.9562016,9.8443804,17.282093,6.7164507z M3.3900077,12.8546343c0.0334792,0,0.0678635-0.0024414,0.1022475-0.0078125c0.3791301-0.0600586,0.6415353-0.4414062,0.5863395-0.8510742c-0.0841506-0.6181641-0.1954465-1.2524414-0.332078-1.8867188C3.3673866,8.3546343,3.6460788,6.5435991,4.5319219,5.0108843c0.8831291-1.5297849,2.2675419-2.597656,3.8944526-3.0063474c1.4052248-0.3491211,2.9009333-0.1430664,4.1930523,0.5581055c0.3411264,0.1875,0.7600698,0.0371094,0.9328947-0.3325195c0.1728258-0.3701172,0.0343838-0.8212891-0.3085518-1.0073242c-1.5789547-0.8579102-3.4076462-1.105957-5.1304712-0.6796875c-1.9897542,0.5-3.6809092,1.8046875-4.7612944,3.6738279C2.2698097,6.0909624,1.929588,8.3043413,2.3928685,10.4488726c0.1275833,0.59375,0.2316403,1.1870117,0.3103619,1.7646484C2.7539017,12.5865679,3.0506909,12.8546343,3.3900077,12.8546343z M3.5972173,14h-0.023526c-0.3836544,0-0.684063,0.2493391-0.6713951,0.6634016c0.0271454,0.8476562,0.0036194,1.5799913-0.0696731,2.3895617c-0.0380034,0.4121094,0.2415936,0.777544,0.6234381,0.8180714c0.0226212,0.0024414,0.0461471,0.0025425,0.0687683,0.0025425c0.3528895,0,0.6551077-0.2373772,0.6903965-0.6245842c0.0796266-0.875,0.1058669-1.7228241,0.0769119-2.6368866C4.2785654,14.2068329,3.9700134,14,3.5972173,14z" />
  </Svg>
);

export default Fingerprint;
