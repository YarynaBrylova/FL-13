class TabManager {
  constructor() {
    this.currentTab = null;
  }

  setTab(tab) {
    this.currentTab = tab;
  }

  getTab() {
    return this.currentTab;
  }

  render() {
    this.currentTab.render();
  }
}

class AllEmployeesTab {
  constructor(employeesData) {
    this.data = employeesData;
  }

  render() {
    document.getElementById('root').appendChild(this.renderTreeList(this.data));
  }

  renderTreeList(data){
    const ul = document.createElement('ul');
    
    for (let i = 0; i < data.length; i++) {
      const li = document.createElement('li');
      li.textContent = data[i].name;
  

      if (data[i].hasOwnProperty('teamMembers') && data[i].teamMembers.length) {
        li.appendChild(this.renderTreeList(data[i].teamMembers));
      }
      
      ul.appendChild(li);
    };

    return ul;
  }
}

class AllUnitsTab {
  constructor(employeesData) {
    this.data = employeesData;
  }

  render() {
    // TODO
  }
}

class WarningEmployeesTab {
  constructor(employeesData) {
    this.data = employeesData;
  }

  render() {
    // TODO
  }
}

function mapToEmployeesHierarchyStructure(employeesData){
  for (let i = 0; i < employeesData.length; i++) {
    employeesData[i].teamMembers = [];
    for (let j = 0; j < employeesData.length; j++) {
      if(employeesData[i].id === employeesData[j].rm_id) {
        employeesData[i].teamMembers.push(employeesData[j]);
      }
    }
  }
  return employeesData.filter(user=> user.rm_id == null);
}

const tabManager = new TabManager();
tabManager.setTab(new AllEmployeesTab(mapToEmployeesHierarchyStructure(employeesData)));
tabManager.render();

// tabManager.setTab(new AllUnitsTab(mapToEmployeesHierarchyStructure(employeesData)));
// tabManager.render();

// tabManager.setTab(new WarningEmployeesTab());
// tabManager.render();