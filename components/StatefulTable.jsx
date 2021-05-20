import React, {Component} from 'react';
import {
    StatefulTable,
    Checkbox,
    Button,
    Toggle,
  } from 'carbon-addons-iot-react';

import EmptyState from './EmptyState';

const testData = [
  {
    "id": "us_2l53x15l",
    "values": {
      "name": "Thomas Mattsson",
      "searchableName": "Thomas Mattsson",
      "enabled": true
    }
  },
  {
    "id": "us_6cnlefjg",
    "values": {
      "name": "Steve Diniro",
      "searchableName": "Steve Diniro"
    }
  },
  {
    "id": "us_6vzhr23k",
    "values": {
      "name": "Jannik Altenhofer",
      "searchableName": "Jannik Altenhofer"
    }
  },
  {
    "id": "us_78fvod9e",
    "values": {
      "name": "us_78fvod9e"
    }
  },
  {
    "id": "us_91uywmzj",
    "values": {
      "name": "Horia A",
      "searchableName": "Horia A"
    }
  },
  {
    "id": "us_a1uv01ow",
    "values": {
      "name": "Chris Reckling",
      "searchableName": "Chris Reckling",
      "enabled": true
    }
  },
  {
    "id": "us_b3u1wxif",
    "values": {
      "name": "Maeve OReilly",
      "searchableName": "Maeve OReilly"
    }
  },
  {
    "id": "us_cbbfkddc",
    "values": {
      "name": "Mihaela Cepoiu",
      "searchableName": "Mihaela Cepoiu",
      "enabled": false
    }
  },
  {
    "id": "us_cr7v9i2l",
    "values": {
      "name": "Uwe KriegerWorker03",
      "searchableName": "Uwe KriegerWorker03"
    }
  },
  {
    "id": "us_cwwyrj99",
    "values": {
      "name": "bilal-fyre-vm-gateway",
      "searchableName": "bilal-fyre-vm-gateway"
    }
  },
  {
    "id": "us_dxy333ug",
    "values": {
      "name": "yuh@jp.ibm.com",
      "searchableName": "yuh@jp.ibm.com"
    }
  },
  {
    "id": "us_ga3i1wwk",
    "values": {
      "name": "worker.insights+ios@gmail.com",
      "searchableName": "worker.insights+ios@gmail.com"
    }
  },
  {
    "id": "us_gqpe9xwk",
    "values": {
      "name": "Aviv Caspi",
      "searchableName": "Aviv Caspi"
    }
  },
  {
    "id": "us_h69241l5",
    "values": {
      "name": "Martina Preis",
      "searchableName": "Martina Preis"
    }
  },
  {
    "id": "us_hxucmi8d",
    "values": {
      "name": "Uwe Krieger",
      "searchableName": "Uwe Krieger",
      "enabled": false
    }
  },
  {
    "id": "us_ialmt92u",
    "values": {
      "name": "Scott Wallace",
      "searchableName": "Scott Wallace"
    }
  },
  {
    "id": "us_ixols874",
    "values": {
      "name": "Arrow Test Worker 2",
      "searchableName": "Arrow Test Worker 2"
    }
  },
  {
    "id": "us_jkcv5rgw",
    "values": {
      "name": "Jonathan Muehlstein",
      "searchableName": "Jonathan Muehlstein"
    }
  },
  {
    "id": "us_mqtwnq3z",
    "values": {
      "name": "BAT-ULZII TSEND-OCHIR",
      "searchableName": "BAT-ULZII TSEND-OCHIR",
      "enabled": false
    }
  },
  {
    "id": "us_mz0korxd",
    "values": {
      "name": "ml-lora-edge-gw1",
      "searchableName": "ml-lora-edge-gw1"
    }
  },
  {
    "id": "us_o2mykc5y",
    "values": {
      "name": "Steve Diniro-g",
      "searchableName": "Steve Diniro-g"
    }
  },
  {
    "id": "us_of7ol3vw",
    "values": {
      "name": "Robert Thoss",
      "searchableName": "Robert Thoss",
      "enabled": true
    }
  },
  {
    "id": "us_owelyfx7",
    "values": {
      "name": "karcio",
      "searchableName": "karcio"
    }
  },
  {
    "id": "us_p82jf01q",
    "values": {
      "name": "Lior Limonad",
      "searchableName": "Lior Limonad"
    }
  },
  {
    "id": "us_pyk1k6oy",
    "values": {
      "name": "Jonathan Günther",
      "searchableName": "Jonathan Günther",
      "enabled": true
    }
  },
  {
    "id": "us_qegbaoce",
    "values": {
      "name": "Markus Lorch",
      "searchableName": "Markus Lorch",
      "enabled": false
    }
  },
  {
    "id": "us_sb3cgaat",
    "values": {
      "name": "Erin Buonomo",
      "searchableName": "Erin Buonomo"
    }
  },
  {
    "id": "us_t5xvk44s",
    "values": {
      "name": "Luke Firth",
      "searchableName": "Luke Firth"
    }
  },
  {
    "id": "us_vweep0ok",
    "values": {
      "name": "Karol Czarnecki",
      "searchableName": "Karol Czarnecki",
      "enabled": true
    }
  },
  {
    "id": "us_vygsnahd",
    "values": {
      "name": "Taylor Jones",
      "searchableName": "Taylor Jones"
    }
  },
  {
    "id": "us_w4lfeoj0",
    "values": {
      "name": "Declan Killilea",
      "searchableName": "Declan Killilea"
    }
  },
  {
    "id": "us_wk01nrpk",
    "values": {
      "name": "bar-gateway2",
      "searchableName": "bar-gateway2"
    }
  },
  {
    "id": "us_wkcstd1f",
    "values": {
      "name": "Uwe Kriegersupervisor",
      "searchableName": "Uwe Kriegersupervisor"
    }
  },
  {
    "id": "us_wqc2fblp",
    "values": {
      "name": "Patrick Pircher",
      "searchableName": "Patrick Pircher",
      "enabled": true
    }
  },
  {
    "id": "us_wrmrgjnc",
    "values": {
      "name": "scott-test2-gw",
      "searchableName": "scott-test2-gw"
    }
  },
  {
    "id": "us_wszwxwvp",
    "values": {
      "name": "xter-gw-ml",
      "searchableName": "xter-gw-ml"
    }
  },
  {
    "id": "us_wvoiwl9m",
    "values": {
      "name": "Bilal Al-Saeedi",
      "searchableName": "Bilal Al-Saeedi",
      "enabled": false
    }
  },
  {
    "id": "us_wyarb4wj",
    "values": {
      "name": "D C",
      "searchableName": "D C",
      "enabled": true
    }
  },
  {
    "id": "us_xpmo9jp0",
    "values": {
      "name": "Arrow Test Worker 1",
      "searchableName": "Arrow Test Worker 1"
    }
  },
  {
    "id": "us_xyrh9u4i",
    "values": {
      "name": "DEAN HABER",
      "searchableName": "DEAN HABER"
    }
  },
  {
    "id": "us_z095khm5",
    "values": {
      "name": "karol-gateway-id",
      "searchableName": "karol-gateway-id"
    }
  }
]

const testColumns = [
  {
    "id": "name",
    "name": "User name",
    "isSortable": true
  },
  {
    "id": "enabled",
    "name": "Shield status",
    "isSortable": true
  }
];

class CustomStatefulTable extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      // toggle and checkboxes have same state
      checkBoxes: [true, false]
    };
  }
  
  render() {

    const columns = [
      {
        id: 'name',
        name: 'name',
      },
      {
        id: 'check',
        name: 'checkbox',
        renderDataFunction: ({value, rowId}) => (
                <Checkbox
                    checked={this.state.checkBoxes[rowId]}
                    onChange={() => updateCheckbox(rowId)}
                />
            )
      },
      {
        id: 'toggle',
        name: 'toggle',
        renderDataFunction: ({value, rowId}) => (
                <Toggle
                    toggled={this.state.checkBoxes[rowId]}
                    onChange={() => updateCheckbox(rowId)}
                />
            )
      }
    ];

    const tableData = [
      {
        id: 0,
        values: {
          name : 'test1',
          check: true,
          toggle: true,
        }
      },
      {
        id: 1,
        values: {
          name : 'test1',
          check: false,
          toggle: true,
        }
      }
    ];

    const options = {
      hasSearch: true,
    };

    const view = {
            table: {
                loadingState: {
                    isLoading: false,
                },
                emptyState: <EmptyState text="Test" />,
                sort: { columnId: 'name', direction: 'ASC' },
            },
            toolbar: {
                batchActions: [
                    {
                        iconDescription: 'Enable User',
                        id: 'enable',
                        labelText: 'Enable User',
                        renderIcon: null,
                    },
                    {
                        iconDescription: 'Disable User',
                        id: 'disable',
                        labelText: 'Disable User',
                        renderIcon: null,
                    }
                ]
            }
        };

    return(
      <StatefulTable 
        columns={testColumns}
        data={testData}
        options={options}
        view={view}
      />
    );
  }
}

export default CustomStatefulTable;