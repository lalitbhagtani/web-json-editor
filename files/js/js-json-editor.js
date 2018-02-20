var isCopyMode = false;
var copyObjectViewId = null;
var counter = 0;
var objectDragElementType = 'jsonElement';
var objectDragArrayType = 'jsonArray';
var objectDragObjectType = 'jsonObject';
var objectDragType = 'type';

var displayInline = 'inline';
var displayBlock = 'block';
var displayNone = 'none';
var displayVisible = 'visible';
var displayHidden = 'hidden';

var valueNull = 'null';

var overlayDivId = 'overlay';
var overlayElementBoxId = 'element-toolbox-overlay';
var elementBoxId = 'json-element-box';
var overlayArrayBoxId = 'array-toolbox-overlay';
var arrayBoxId = 'json-array-box';
var overlayObjectBoxId = 'object-toolbox-overlay';
var objectBoxId = 'json-object-box';

var attachedJsonObjectKey = 'attachedJsonObjectKey';
var dropTargetDivKey = 'dropTargetDivKey';

var objectViewSelectId = null;
var objectViewSelectId_2 = null;
var rootObjectViewId = 'rootObjectId-div';
var rootObject = 'rootObject';
var rootObjectTableId = 'rootObjectId-div-table';
var rootObjectImageId = 'rootObjectId-div-img';

var jsonTextViewId = 'json-text';

var autoType = "auto";
var stringType = "string";
var numberType = "number";
var booleanType = "boolean";
var dateType = "date";
var nullType = "null";
var objectsType = "objects";

var ElementInElementMessage = "An element can not come inside another element";
var ElementInArrayMessage = "An element can not come inside another array";
var ObjectInElementMessage = "An object can not come inside another element";
var ArrayInElementMessage = "An array can not come inside another element";
var ArrayInArrayMessage = "An array can not come inside another array";
var ArrayInNonObjectsMessage = "This is not an Object array";

var noneSelectedMessage = "Please select node to delete";
var rootSelectedMessage = "Root object can not be deleted";
var deleteConfirmMessage = "Are you sure, you want to delete this node. Once deleted can'nt be undone";
var noneSelectedCopyMessage = "Please select a node to copy";
var noneSelectedPasteMessage = "Please select node to paste";
var copiedMessage = "Copied";
var CloudConnectionProblemMessage = "There is some problem in connecting to cloud server, Please try again after some time";
var jsonSavedMessage = "Saved";

var overlayElementName = 'element-name';
var overlayElementValue = 'element-value';
var overlayElementRadioTrue = 'element-radio-true';
var overlayElementRadioFalse = 'element-radio-false';
var overlayElementType = 'element-type';
var overlayElementRadioDiv = 'element-radio-div';
var overlayElementMandatoryName = 'element-name-mandatory-overlay';
var overlayElementMandatoryValue  = 'element-value-mandatory-overlay';

var overlayArrayName = 'array-name';
var overlayArrayValue = 'array-value';
var overlayDateDiv = 'date-div';
var overlayArrayDateValue = 'array-date-value';
var overlayArrayType = 'array-type';
var overlayArrayDateDiv = 'array-date-div';
var overlayArrayMandatoryName = 'array-name-mandatory-overlay';
var overlayArrayMandatoryValue  = 'array-value-mandatory-overlay';
var overlayArrayCheckValue  = 'array-value-check-overlay';

var overlayObjectName = 'object-name';
var overlayObjectMandatoryName = 'object-name-mandatory-overlay';

var toolboxElementName = 'json-element-name';
var toolboxElementValue = 'json-element-value';
var toolboxElementRadioTrue = 'json-element-radio-true';
var toolboxElementRadioFalse = 'json-element-radio-false';
var toolboxElementRadioDiv = 'json-element-radio-div';
var toolboxElementType = 'json-element-type';
var toolboxElementMandatoryName = 'element-name-mandatory-text';
var toolboxElementMandatoryValue  = 'element-value-mandatory-text';

var toolboxArrayName = 'json-array-name';
var toolboxArrayValue = 'json-array-value';
var toolboxDateDiv = 'json-date-div';
var toolboxArrayDateValue = 'json-array-date-value';
var toolboxArrayType = 'json-array-type';
var toolboxArrayDateDiv = 'json-array-date-div';
var toolboxArrayMandatoryName = 'array-name-mandatory-text';
var toolboxArrayMandatoryValue  = 'array-value-mandatory-text';
var toolboxArrayCheckValue  = 'array-value-check-text';

var toolboxObjectName = 'json-object-name';
var toolboxObjectMandatoryName = 'object-name-mandatory-text';

var objectViewDivSelectBackground = '#555555';
var objectViewDivBackground = '#2f2f2f';

var objectTreeViewClassName = 'json-object';
var arrayTreeViewClassName = 'json-array';
var elementTreeViewClassName = 'json-element';

var deleteImagePath = 'jsonEditorFiles/images/delete.png';
var collapseImagePath = 'jsonEditorFiles/images/collapse.png';
var expandImagePath = 'jsonEditorFiles/images/expand.png';
var circleImagePath = 'jsonEditorFiles/images/circle.png';
var copyImagePath = 'jsonEditorFiles/images/copy.png';
var copySelectImagePath = 'jsonEditorFiles/images/copy-select.png';
var collapseImagePathClassName = 'collapse-indent';
var circleImagePathClassName = 'circle-indent';
var treeTableClassName = 'tree-table';

var cssClassAddDateOverlay = 'add-date';
var cssClassDeleteImageOverlay = 'delete-image';
var cssClassAddDate = 'json-add-date';
var cssClassDeleteImage = 'json-delete-image';

var selectDateMessage = 'Select Date';
var allNumberMessage = 'All values should be number';
var allBooleanMessage = 'All values should be boolean';
var allNullMessage = 'All values should be null';

var jsonArrayDateValue = [];

var imageAlt = 'Online Json Editor';
var propertyBox = 'property-box';

var rootJsonObject = new JsonObject(rootObject,rootObjectTableId,rootObjectImageId);

function JsonElement(name,value,valueType){
    this.type = "jsonElement";
    this.name = name;
    this.value = value;
    this.valueType = valueType;
    this.divId = "";
}

function JsonArray(name,valueType){
    this.type = "jsonArray";
    this.name = name;
    this.value = new Array();
    this.valueType = valueType
    this.tableId = "";
    this.imageId = "";
    this.parent = "";
    this.divId = "";
}

function JsonObject(name,tableId,imageId){
    this.type = "jsonObject";
    this.name = name;
    this.value = new Array();
    this.tableId = tableId;
    this.imageId = imageId;
    this.divId = "";
}

function isFloat(n){
    return n % 1 !== 0;
}

function isInteger(n){
    return n % 1 === 0;
}

function setFormattedJsonText(){
    var json = {};
    if(rootJsonObject != null){
        json = getJsonObject(rootJsonObject);
    }
    document.getElementById(jsonTextViewId).value = JSON.stringify(json,null,'\t');
}

function getJsonObject(jsonObject){
    var property;
    var object = {};
    if(jsonObject.value !== null){
        for(var i=0;i<jsonObject.value.length;i++){
            property = jsonObject.value[i];
            if(property !== null){
                if(property.type === "jsonElement"){
                    object[property.name] = property.value;
                }else if(property.type === "jsonArray"){
                	var temp = new Array();
                	for(var j in property.value){                		
                		if(Object.prototype.toString.call(property.value[j]) === '[object Object]'){
                			temp.push(getJsonObject(property.value[j]));
                		}else{
                			temp.push(property.value[j]);
                		}
                	}
                	object[property.name] = temp;                    
                }else if(property.type === "jsonObject"){
                    object[property.name] = getJsonObject(property);
                }
            }
        }
    }
    return object;
}

jQuery.data(document.getElementById(rootObjectViewId),attachedJsonObjectKey,rootJsonObject);

function setAndShowPropertyBox(objectView){
    var JsonObject = jQuery.data(objectView,attachedJsonObjectKey);
    if(JsonObject.type === objectDragElementType){
        showPropertyBox(propertyBox,objectDragElementType);
        jQuery.data(document.getElementById(elementBoxId),dropTargetDivKey,objectView);
        setElementBoxInitialValues(JsonObject,toolboxElementName,toolboxElementType,toolboxElementValue,
            toolboxElementRadioTrue,toolboxElementRadioFalse,toolboxElementRadioDiv,toolboxElementMandatoryName,
            toolboxElementMandatoryValue);
    }else if(JsonObject.type === objectDragArrayType){
    	showPropertyBox(propertyBox,objectDragArrayType);
        jQuery.data(document.getElementById(arrayBoxId),dropTargetDivKey,objectView);
        setArrayBoxInitialValues(JsonObject,toolboxArrayName,toolboxArrayValue,toolboxArrayDateDiv,
            toolboxDateDiv,toolboxArrayDateValue,toolboxArrayType,toolboxArrayMandatoryName,toolboxArrayMandatoryValue,
            toolboxArrayCheckValue,cssClassAddDate,cssClassDeleteImage);        
    }else if(JsonObject.type === objectDragObjectType){
    	if(JsonObject.parent === objectDragObjectType){
    		showPropertyBox(propertyBox,objectDragObjectType);
            jQuery.data(document.getElementById(objectBoxId),dropTargetDivKey,objectView);
            setObjectBoxInitialValues(JsonObject,toolboxObjectName,toolboxObjectMandatoryName);
    	}
    }
}

function drop(event) {
    event.preventDefault();
    var dropTarget = event.currentTarget;
    var dragType = event.dataTransfer.getData(objectDragType);
    var bindObject = jQuery.data(dropTarget,attachedJsonObjectKey);
    if(bindObject != null){
        var isAllowed = allowDrop(dragType,bindObject);
        if(isAllowed){
            objectViewSelectId_2 = objectViewSelectId;
            objectViewSelectId = dropTarget.id;
            if(dragType === objectDragElementType){
                openOverlay(overlayDivId,objectDragElementType);
                jQuery.data(document.getElementById(overlayElementBoxId),dropTargetDivKey,dropTarget);
                setElementBoxInitialValues(new JsonElement("","",autoType),overlayElementName,overlayElementType,overlayElementValue,
                    overlayElementRadioTrue,overlayElementRadioFalse,overlayElementRadioDiv,overlayElementMandatoryName,
                    overlayElementMandatoryValue);
            }else if(dragType === objectDragArrayType){
            	openOverlay(overlayDivId,objectDragArrayType);
                jQuery.data(document.getElementById(overlayArrayBoxId),dropTargetDivKey,dropTarget);
                setArrayBoxInitialValues(new JsonArray("",autoType),overlayArrayName,overlayArrayValue,overlayArrayDateDiv,
                    overlayDateDiv,overlayArrayDateValue,overlayArrayType,overlayArrayMandatoryName,overlayArrayMandatoryValue,
                    overlayArrayCheckValue,cssClassAddDateOverlay,cssClassDeleteImageOverlay);                
            }else if(dragType === objectDragObjectType){
            	if(dragType === bindObject.type){
            		openOverlay(overlayDivId,objectDragObjectType);
                    jQuery.data(document.getElementById(overlayObjectBoxId),dropTargetDivKey,dropTarget);
                    setObjectBoxInitialValues(new JsonObject("","",""),overlayObjectName,overlayObjectMandatoryName);
            	}else{
            		var jsonObject = new JsonObject("","","");
            		var bindObject = jQuery.data(dropTarget,attachedJsonObjectKey);
            		jsonObject.name = bindObject.value.length;
            		jsonObject.parent = objectDragArrayType;
                    bindObject.value.push(jsonObject);
                    var data = createObjectDiv(jsonObject);
                    document.getElementById(bindObject.tableId).appendChild(data.element);
                    document.getElementById(bindObject.tableId).appendChild(data.table);
                    document.getElementById(bindObject.imageId).style.visibility = displayVisible;
                    objectTreeDivOnClick(data.id);
                    setFormattedJsonText();
            	}                               
            }
        }else{
            dropTarget.style.background = objectViewDivBackground;
            if(objectViewSelectId != null){
                var objectView = document.getElementById(objectViewSelectId);
                objectView.style.background = objectViewDivSelectBackground;
            }
        }
    }
}

function allowDrop(dragType,dropObject){
    var dropType = dropObject.type;
    if(dragType === objectDragElementType){
        if(dropType === objectDragObjectType){
            return true;
        }else if(dropType === objectDragElementType){
            alert(ElementInElementMessage);
            return false;
        }else if(dropType === objectDragArrayType){
            alert(ElementInArrayMessage);
            return false;
        }
    }else if(dragType === objectDragObjectType){
        if(dropType === objectDragObjectType){
            return true;
        }else if(dropType === objectDragElementType){
            alert(ObjectInElementMessage);
            return false;
        }else if(dropType === objectDragArrayType){
            if(dropObject.valueType === objectsType){
                return true;
            }else{
                alert(ArrayInNonObjectsMessage);
                return false;
            }
        }
    }else if(dragType === objectDragArrayType){
        if(dropType === objectDragObjectType){
            return true;
        }else if(dropType === objectDragElementType){
            alert(ArrayInElementMessage);
            return false;
        }else if(dropType === objectDragArrayType){
            alert(ArrayInArrayMessage);
            return false;
        }
    }
}

function getFormattedTreeDivId(name){
    counter = counter + 1;
    if(name.length >= 5){
        return name.substring(0,5) + "-" + counter;
    }else{
        return name + "-" + counter;
    }
}

function getFormattedTreeDivName(name){
    if(name.length > 15){
        return name.substring(0,15) + "...";
    }else{
        return name;
    }
}

function createElementDiv(jsonObject){
    var divId = getFormattedTreeDivId(jsonObject.name)+"-div";
    jsonObject.divId = divId;
    var element = getMandatoryText(divId,elementTreeViewClassName,
    		getFormattedTreeDivName(jsonObject.name));
    jQuery.data(element,attachedJsonObjectKey,jsonObject);    
    element.addEventListener('dragenter',function(event){
        dragEnter(event);
    });
    element.addEventListener('dragleave',function(event){
        dragLeave(event);
    });
    element.addEventListener('drop',function(event){
        drop(event);
    });
    element.addEventListener('dragover',function(event){
        dragOver(event);
    });
    element.addEventListener('click',function(){
        objectTreeDivOnClick(divId);
    });
    var row = document.createElement("tr");
    $(row).attr('id',divId+'-tr');
    var column = document.createElement("td");
    column.appendChild(getImage(divId+'-img',circleImagePath,circleImagePathClassName));
    column.appendChild(element);
    row.appendChild(column);
    return  {
        element: row,
        id: divId
    };
}

function createObjectDiv(jsonObject){
    var divId = getFormattedTreeDivId(jsonObject.name)+"-div";
    jsonObject.divId = divId;
    var colImage = getImage(divId+'-img',collapseImagePath,collapseImagePathClassName);
    colImage.addEventListener('click',function(){
        objectCollapseImageOnClick(divId+'-table',divId+'-img',divId);
    });
    var element = getMandatoryText(divId,'',getFormattedTreeDivName(jsonObject.name));
    jQuery.data(element,attachedJsonObjectKey,jsonObject);    
    if(jsonObject.type === objectDragArrayType){
        $(element).addClass(arrayTreeViewClassName);
    }else{
        $(element).addClass(objectTreeViewClassName);
    }
    element.addEventListener('dragenter',function(event){
        dragEnter(event);
    });
    element.addEventListener('dragleave',function(event){
        dragLeave(event);
    });
    element.addEventListener('drop',function(event){
        drop(event);
    });
    element.addEventListener('dragover',function(event){
        dragOver(event);
    });
    element.addEventListener('click',function(){
        objectTreeDivOnClick(divId);
    });    
    var table = document.createElement("table");
    $(table).attr('id',divId+'-table');
    $(table).addClass(treeTableClassName);
    jsonObject.tableId = divId+'-table';
    jsonObject.imageId = divId+'-img';
    var row = document.createElement("tr");
    $(row).attr('id',divId+'-tr');    
    var rowTable = document.createElement("tr");
    $(rowTable).attr('id',divId+'-table-tr'); 
    var column = document.createElement("td");
    column.appendChild(colImage);
    column.appendChild(element);
    row.appendChild(column);    
    var columnTable = document.createElement("td");    
    columnTable.appendChild(table);
    rowTable.appendChild(columnTable);
    return  {
        element: row,
        id: divId,
        table:rowTable
    };
}

function objectCollapseImageOnClick(divIdTable,divIdImage,divId){
    var tableView = document.getElementById(divIdTable);
    var imageView = document.getElementById(divIdImage);
    if(imageView.src.includes(collapseImagePath)){
        tableView.style.display = displayNone;
        imageView.src = expandImagePath;
    }else if(imageView.src.includes(expandImagePath)){
        tableView.style.display = displayBlock;
        imageView.src = collapseImagePath;
    }
    objectTreeDivOnClick(divId);
}

function deleteJsonView(){
    if(objectViewSelectId == null){
        alert(noneSelectedMessage);
    }else if(objectViewSelectId == rootObjectViewId){
        alert(rootSelectedMessage);
    }else{
        var ok = confirm(deleteConfirmMessage);
        if(ok){
        	unCopy();
            var jsonObject = jQuery.data(document.getElementById(objectViewSelectId),attachedJsonObjectKey);
            var objectViewTr = document.getElementById(objectViewSelectId+'-tr');
            var objectViewTableTr = document.getElementById(objectViewSelectId+'-table-tr');
            var parentTableView = objectViewTr.parentNode;
            parentTableView.removeChild(objectViewTr);
            if(objectViewTableTr !== null){
                parentTableView.removeChild(objectViewTableTr);
            }
            var parentDivId = parentTableView.id.replace("-table","");
            var parentJsonObject = jQuery.data(document.getElementById(parentDivId),attachedJsonObjectKey);
            if(parentJsonObject != null && parentJsonObject.value != null){
                var i = parentJsonObject.value.indexOf(jsonObject);
                if(i != -1) {
                    parentJsonObject.value.splice(i, 1);
                }
            }
            if(parentJsonObject.value.length == 0){
                document.getElementById(parentDivId+'-img').style.visibility='hidden';
            }
            if(jsonObject.type === objectDragObjectType && jsonObject.parent === objectDragArrayType){
            	var temp;
            	var tempElement;
            	for(var j in parentJsonObject.value){
            		temp = parentJsonObject.value[j];
            		temp.name = j;
            		tempElement = document.getElementById(temp.divId);
            		$(tempElement).html(getFormattedTreeDivName(temp.name));
            	}
            }
            setFormattedJsonText();
            objectTreeDivOnClick(parentDivId);
        }
    }
}

function dragObjectStart(event) {
    dragStart();
    event.dataTransfer.setData(objectDragType, objectDragObjectType);
}

function dragElementStart(event) {
    dragStart();
    event.dataTransfer.setData(objectDragType, objectDragElementType);
}

function dragArrayStart(event) {
    dragStart();
    event.dataTransfer.setData(objectDragType, objectDragArrayType);
}

function dragStart(){
    if(objectViewSelectId != null){
        var objectView = document.getElementById(objectViewSelectId);
        objectView.style.background = objectViewDivBackground;
    }
}

function dragEnter(event) {
    var objectViewDiv = event.currentTarget;
    if(objectViewDiv != null){
        objectViewDiv.style.background = objectViewDivSelectBackground;
    }
}

function dragEnded(event) {
    if(objectViewSelectId != null){
        var objectView = document.getElementById(objectViewSelectId);
        objectView.style.background = objectViewDivSelectBackground;
    }
}

function dragLeave(event) {
    var objectViewDiv = event.currentTarget;
    if(objectViewDiv != null){
        objectViewDiv.style.background = objectViewDivBackground;
    }
}

function dragOver(event) {
    event.preventDefault();
}

function showPropertyBox(propertyBoxId,dragType){
    var propertyBox = document.getElementById(propertyBoxId);
    if(dragType === objectDragElementType){
        propertyBox.appendChild(elementDiv());
    }else if(dragType === objectDragObjectType){
        propertyBox.appendChild(objectDiv());
    }else if(dragType === objectDragArrayType){
        propertyBox.appendChild(arrayDiv());
    }
}

function hidePropertyBox(propertyBoxId){
    var propertyBox = document.getElementById(propertyBoxId);
    while (propertyBox.firstChild) {
        propertyBox.removeChild(propertyBox.firstChild);
    }
}

function openOverlay(overlayId,dragType){
    var Overlay = document.getElementById(overlayId);
    Overlay.style.visibility = displayVisible;
    if(dragType === objectDragElementType){
        Overlay.appendChild(elementDivOverlay());
    }else if(dragType === objectDragObjectType){
        Overlay.appendChild(objectDivOverlay());
    }else if(dragType === objectDragArrayType){
        Overlay.appendChild(arrayDivOverlay());
    }
}

var closeOverLayVar = function closeOverlay(overlayId,crossButton){
    var Overlay = document.getElementById(overlayId);
    Overlay.style.visibility = displayHidden;
    while (Overlay.firstChild) {
        Overlay.removeChild(Overlay.firstChild);
    }
    if(crossButton){
        if(objectViewSelectId != null){
            var objectView = document.getElementById(objectViewSelectId);
            objectView.style.background = objectViewDivBackground;
        }
        if(objectViewSelectId_2 != null){
            var objectView = document.getElementById(objectViewSelectId_2);
            objectView.style.background = objectViewDivSelectBackground;
        }
        objectViewSelectId = objectViewSelectId_2;
    }
}

function setJsonElementValue(elementBox,nameId,valueId,radioTrueId,radioFalseId,typeId,nameMandatoryId,valueMandatoryId){
    var jsonElement = new JsonElement("","","");
    var isCheckPassed = true;
    var jsonElementNameDiv = document.getElementById(nameId);
    if(jsonElementNameDiv.value === undefined || jsonElementNameDiv.value === ''){
        isCheckPassed = false;
        document.getElementById(nameMandatoryId).style.display = displayBlock;
    }else{
        jsonElement.name = jsonElementNameDiv.value;
    }
    var jsonElementSelect = document.getElementById(typeId);
    var typeValue = jsonElementSelect.options[jsonElementSelect.selectedIndex].value;
    jsonElement.valueType = typeValue;
    if(typeValue === booleanType){
        var jsonElementRadioTrue = document.getElementById(radioTrueId);
        var jsonElementRadioFalse = document.getElementById(radioFalseId);
        if(jsonElementRadioTrue.checked === true){
            jsonElement.value = true;
        }else if(jsonElementRadioFalse.checked === true){
            jsonElement.value = false;
        }else{
            isCheckPassed = false;
            document.getElementById(valueMandatoryId).style.display = displayBlock;
        }
    }else{
        var jsonElementValueDiv = document.getElementById(valueId);
        if(typeValue === stringType || typeValue === autoType){
            if(jsonElementValueDiv.value === undefined){
                isCheckPassed = false;
                document.getElementById(valueMandatoryId).style.display = displayBlock;
            }
        }else {
            if(jsonElementValueDiv.value === undefined || jsonElementValueDiv.value === ''){
                isCheckPassed = false;
                document.getElementById(valueMandatoryId).style.display = displayBlock;
            }
        }
    }
    if(!isCheckPassed){
        return;
    }else{
        if(typeValue === stringType){
            jsonElement.value = jsonElementValueDiv.value;
        }else if(typeValue === numberType){
            jsonElement.value = jsonElementValueDiv.valueAsNumber;
        }else if(typeValue === dateType){
            jsonElement.value = jsonElementValueDiv.valueAsDate;
        }else if(typeValue === nullType){
            if(jsonElementValueDiv.value.toLowerCase() === 'null'){
                jsonElement.value = null;
            }
        }else if(typeValue === autoType){
            if(jsonElementValueDiv.value.toLowerCase() === 'null'){
                jsonElement.value = null;
            }else if(jsonElementValueDiv.value.toLowerCase() === 'true' ){
                jsonElement.value = true;
            }else if(jsonElementValueDiv.value.toLowerCase() === 'false' ){
                jsonElement.value = false;
            }else if(jsonElementValueDiv.value.toLowerCase() === '' ){
                jsonElement.value = '';
            }else if(!isNaN(jsonElementValueDiv.value)){
                if(isFloat(jsonElementValueDiv.value)){
                    jsonElement.value = parseFloat(jsonElementValueDiv.value);
                }else if(isInteger(jsonElementValueDiv.value)){
                    jsonElement.value = parseInt(jsonElementValueDiv.value);
                }else{
                    jsonElement.value = jsonElementValueDiv.value;
                }
            }else{
                jsonElement.value = jsonElementValueDiv.value;
            }
        }
        
        if(elementBox === overlayElementBoxId){
            var dropTarget = jQuery.data(document.getElementById(elementBox),dropTargetDivKey);
            var bindObject = jQuery.data(dropTarget,attachedJsonObjectKey);
            bindObject.value.push(jsonElement);
            var data = createElementDiv(jsonElement);
            document.getElementById(bindObject.tableId).appendChild(data.element);
            document.getElementById(bindObject.imageId).style.visibility = displayVisible;
            closeOverLayVar(overlayDivId,false);
            objectTreeDivOnClick(data.id);
        }else if(elementBox === elementBoxId){
            var selectedObjectViewDiv = jQuery.data(document.getElementById(elementBox),dropTargetDivKey);
            var bindObject = jQuery.data(selectedObjectViewDiv,attachedJsonObjectKey);
            bindObject.name = jsonElement.name;
            bindObject.value = jsonElement.value;
            bindObject.valueType = jsonElement.valueType;
            $(selectedObjectViewDiv).html(getFormattedTreeDivName(bindObject.name));
        }
        setFormattedJsonText();
        return;
    }
}

function setElementBoxInitialValues(jsonElementObject,elementName,elementType,elementValue,elementRadioTrue,
                                    elementRadioFalse,elementRadioDiv,elementNameMandatoryDiv,elementValueMandatoryDiv){
    var value = jsonElementObject.value;
    var name = jsonElementObject.name;
    var valueType = jsonElementObject.valueType;

    document.getElementById(elementNameMandatoryDiv).style.display = displayNone;
    document.getElementById(elementValueMandatoryDiv).style.display = displayNone;

    document.getElementById(elementName).value = name;
    document.getElementById(elementType).value = valueType;
    /* first clean input types */
    var jsonElementInput = document.getElementById(elementValue);
    var jsonElementRadioTrue = document.getElementById(elementRadioTrue);
    var jsonElementRadioFalse = document.getElementById(elementRadioFalse);
    var jsonElementRadioDiv = document.getElementById(elementRadioDiv);
    jsonElementInput.value = "";
    jsonElementRadioTrue.checked = "";
    jsonElementRadioFalse.checked = "";

    if(valueType === stringType || valueType === autoType){
        jsonElementInput.type = "text";
        if(value === null){
            jsonElementInput.value = 'null';
        }else{
            jsonElementInput.value = value;
        }
        jsonElementInput.readOnly = false;
        jsonElementRadioDiv.style.display = displayNone;
    }else if(valueType === numberType){
        jsonElementInput.type = "number";
        jsonElementInput.value = value;
        jsonElementInput.readOnly = false;
        jsonElementRadioDiv.style.display = displayNone;
    }if(valueType === booleanType){
        jsonElementInput.value = "";
        jsonElementInput.readOnly = false;
        jsonElementInput.type = "hidden";
        jsonElementRadioDiv.style.display = displayInline;
        if(true === value){
            jsonElementRadioTrue.checked = "checked";
        }else{
            jsonElementRadioFalse.checked = "checked";
        }
    }if(valueType === nullType){
        jsonElementInput.type = "text";
        jsonElementInput.value = "null";
        jsonElementInput.readOnly = true;
        jsonElementRadioDiv.style.display = displayNone;
    }if(valueType === dateType){
        jsonElementInput.type = "date";
        jsonElementInput.valueAsDate = value;
        jsonElementInput.readOnly = false;
        jsonElementRadioDiv.style.display = displayNone;
    }
}

function elementDivOverlay(){
    var overlayDiv = getDivWithIdAndClass('element-toolbox-overlay','element-toolbox-overlay');
    var titleBar = createOverlayTitleBar('Json Element',closeOverLayVar,'overlay');
    var elementDiv = getDivWithIdAndClass('element-box','element-box');
    elementDiv.appendChild(elementNameOverlay());
    elementDiv.appendChild(elementValueOverlay());
    elementDiv.appendChild(elementTypeOverlay());
    elementDiv.appendChild(elementButtonOverlay());

    overlayDiv.appendChild(titleBar);
    overlayDiv.appendChild(elementDiv);
    return overlayDiv;
}

function elementValueOverlay(){
    var valueDiv = getPropertyDiv('property-div');
    var value = getPropertyDivText('property-value','Value :- ');
    var input = getPropertyDivInput('element-value','text','width:70%');
    input.addEventListener('blur',function(){
        checkElementValueOnblur('element-value','element-value-mandatory-overlay','element-type');
    });
    input.addEventListener('focus',function(){
        checkElementOnFocus('element-value-mandatory-overlay');
    });
    var radioDiv = getPropertyBooleanBox('element-radio-div','element-radio-true',
    		'element-radio-false','property-name','element-value-mandatory-overlay');
    var valueMandatory = getMandatoryText('element-value-mandatory-overlay','mandatory-text-overlay',
    		'* Value is a Mandatory Field');
    valueDiv.appendChild(value);
    valueDiv.appendChild(input);
    valueDiv.appendChild(radioDiv);
    valueDiv.appendChild(document.createElement('br'));
    valueDiv.appendChild(valueMandatory);
    return valueDiv;
}

function elementDiv(){
    var elementDiv = document.createElement('div');
    $(elementDiv).attr('id','json-element-box');
    elementDiv.appendChild(elementName());
    elementDiv.appendChild(elementValue());
    elementDiv.appendChild(elementType());
    elementDiv.appendChild(elementButton());
    return elementDiv;
}

function elementValue(){
    var valueDiv = getPropertyDiv('json-property-div');
    var value = getPropertyDivText('json-property-value','Value :- ');
    var input = getPropertyDivInput('json-element-value','text','width:60%');
    input.addEventListener('blur',function(){
        checkElementValueOnblur('json-element-value','element-value-mandatory-text','json-element-type')
    });
    input.addEventListener('focus',function(){
        checkElementOnFocus('element-value-mandatory-text')
    });
    var radioDiv = getPropertyBooleanBox('json-element-radio-div','json-element-radio-true',
    		'json-element-radio-false','json-property-name','element-value-mandatory-text');    
    var valueMandatory = getMandatoryText('element-value-mandatory-text','mandatory-text',
    		'* Value is a Mandatory Field');
    valueDiv.appendChild(value);
    valueDiv.appendChild(input);
    valueDiv.appendChild(radioDiv);
    valueDiv.appendChild(valueMandatory);
    return valueDiv;
}

function elementButtonOverlay(){
    var setDiv = getPropertyDiv('property-div');
    var button = getPropertyDivButton('element-set','button','button-set','Set');
    button.addEventListener('click',function(){
        setJsonElementValue('element-toolbox-overlay','element-name','element-value',
            'element-radio-true','element-radio-false','element-type',
            'element-name-mandatory-overlay','element-value-mandatory-overlay');
    });
    setDiv.appendChild(button);
    return setDiv;
}

function elementButton(){
    var setDiv = getPropertyDiv('json-property-div');
    var button = getPropertyDivButton('json-element-set','button','json-button-set','Set');
    button.addEventListener('click',function(){
        setJsonElementValue('json-element-box','json-element-name','json-element-value',
            'json-element-radio-true','json-element-radio-false','json-element-type',
            'element-name-mandatory-text','element-value-mandatory-text')
    });
    setDiv.appendChild(button);
    return setDiv;
}

function elementTypeOverlay(){
    var typeDiv = getPropertyDiv('property-div');
    var type = getPropertyDivText('property-type','Type :- ');
    var select = getPropertyDivSelect('element-type');
    select.addEventListener('change',function(){
        changeJsonElementValueTypeBox('element-value','element-type',
            'element-radio-true','element-radio-false','element-radio-div');
    });
    typeDiv.appendChild(type);
    typeDiv.appendChild(select);
    return typeDiv;
}

function elementType(){
    var typeDiv = getPropertyDiv('json-property-div');
    var type = getPropertyDivText('json-property-type','Type :- ');
    var select = getPropertyDivSelect('json-element-type');
    select.addEventListener('change',function(){
        changeJsonElementValueTypeBox('json-element-value','json-element-type',
            'json-element-radio-true','json-element-radio-false','json-element-radio-div');
    });
    typeDiv.appendChild(type);
    typeDiv.appendChild(select);
    return typeDiv;
}

function elementNameOverlay(){
    var nameDiv = getPropertyDiv('property-div');
    var name = getPropertyDivText('property-name','Name :- ');
    var input = getPropertyDivInput('element-name','text','width:70%');
    input.addEventListener('blur',function(){
        checkElementOnblur('element-name','element-name-mandatory-overlay')
    });
    input.addEventListener('focus',function(){
        checkElementOnFocus('element-name-mandatory-overlay')
    });
    var nameMandatory = getMandatoryText('element-name-mandatory-overlay','mandatory-text-overlay','* Name is a Mandatory Field');
    nameDiv.appendChild(name);
    nameDiv.appendChild(input);
    nameDiv.appendChild(document.createElement('br'));
    nameDiv.appendChild(nameMandatory);
    return nameDiv;
}

function elementName(){
    var nameDiv = getPropertyDiv('json-property-div');
    var name = getPropertyDivText('json-property-name','Name :- ');
    var input = getPropertyDivInput('json-element-name','text','width:60%');
    input.addEventListener('blur',function(){
        checkElementOnblur('json-element-name','element-name-mandatory-text');
    });
    input.addEventListener('focus',function(){
        checkElementOnFocus('element-name-mandatory-text');
    });
    var nameMandatory = getMandatoryText('element-name-mandatory-text','mandatory-text','* Name is a Mandatory Field');
    nameDiv.appendChild(name);
    nameDiv.appendChild(input);
    nameDiv.appendChild(nameMandatory);
    return nameDiv;
}

function checkElementOnblur(elementName,mandatoryDiv){
    var jsonElementInput = document.getElementById(elementName);
    var value = jsonElementInput.value;
    if(value === undefined || value === ''){
        document.getElementById(mandatoryDiv).style.display = displayBlock;
    }
}

function checkElementOnFocus(mandatoryDiv){
    document.getElementById(mandatoryDiv).style.display = displayNone;
}

function checkElementValueOnblur(elementName,mandatoryDiv,elementType){
    var jsonElementSelect = document.getElementById(elementType);
    var typeValue = jsonElementSelect.options[jsonElementSelect.selectedIndex].value;
    var value = document.getElementById(elementName).value;
    if(typeValue === stringType || typeValue === autoType){
        if(value === undefined){
            document.getElementById(mandatoryDiv).style.display = displayBlock;
        }
    }else {
        if(value === undefined || value === ''){
            document.getElementById(mandatoryDiv).style.display = displayBlock;
        }
    }
}

function setElementBooleanValue(mandatoryDiv){
    document.getElementById(mandatoryDiv).style.display = displayNone;
}

function changeJsonElementValueTypeBox(valueTypeId,selectTypeId,radioTypeTrue,radioTypeFalse,radioDiv){
    var jsonElementInput = document.getElementById(valueTypeId);
    var jsonElementRadioTrue = document.getElementById(radioTypeTrue);
    var jsonElementRadioFalse = document.getElementById(radioTypeFalse);
    var jsonElementRadioDiv = document.getElementById(radioDiv);
    var jsonElementSelect = document.getElementById(selectTypeId);
    var value = jsonElementSelect.options[jsonElementSelect.selectedIndex].value;
    if(value === stringType || value === autoType){
        jsonElementInput.type = "text";
        jsonElementInput.value = "";
        jsonElementInput.readOnly = false;
        jsonElementRadioDiv.style.display = displayNone;
        jsonElementInput.focus();
    }else if(value === numberType){
        jsonElementInput.type = "number";
        jsonElementInput.value = "";
        jsonElementInput.readOnly = false;
        jsonElementRadioDiv.style.display = displayNone;
        jsonElementInput.focus();
    }if(value === booleanType){
        jsonElementInput.value = "";
        jsonElementInput.readOnly = false;
        jsonElementInput.type = "hidden";
        jsonElementRadioDiv.style.display = displayInline;
        jsonElementRadioTrue.checked = "";
        jsonElementRadioFalse.checked = "";
        jsonElementRadioTrue.focus();
    }if(value === nullType){
        jsonElementInput.type = "text";
        jsonElementInput.value = "null";
        jsonElementInput.readOnly = true;
        jsonElementRadioDiv.style.display = displayNone;
        jsonElementInput.focus();
    }if(value === dateType){
        jsonElementInput.type = "date";
        jsonElementInput.value = "";
        jsonElementInput.readOnly = false;
        jsonElementRadioDiv.style.display = displayNone;
        jsonElementInput.focus();
    }
}

function setArrayBoxInitialValues(jsonArrayObject, arrayName, arrayValue,
		arrayDateDiv, dateDiv, arrayDateValue, arrayType, arrayMandatoryName,
		arrayMandatoryValue, arrayCheckValue, spanClassName, imageClassName) {
	var value = jsonArrayObject.value;
	var name = jsonArrayObject.name;
	var valueType = jsonArrayObject.valueType;

	document.getElementById(arrayMandatoryName).style.display = displayNone;
	document.getElementById(arrayMandatoryValue).style.display = displayNone;
	document.getElementById(arrayCheckValue).style.display = displayNone;

	document.getElementById(arrayName).value = name;
	document.getElementById(arrayType).value = valueType;

	/* first clean input types */
	var jsonArrayValue = document.getElementById(arrayValue);
	var jsonArrayDateDiv = document.getElementById(arrayDateDiv);
	var jsonArrayDateValueInput = document.getElementById(arrayDateValue);
	var jsonDateDiv = document.getElementById(dateDiv);

	jsonArrayDateValueInput.value = "";
	jsonDateDiv.innerHTML = "";
	jsonArrayDateValue = [];
	jsonArrayDateDiv.style.display = displayNone;

	jsonArrayValue.value = value;
	jsonArrayValue.readOnly = false;
	jsonArrayValue.disabled = false;

	if (valueType == dateType) {
		jsonArrayValue.value = "";
		jsonArrayValue.readOnly = true;
		var newdateDiv;
		for (var i = 0; i < value.length; i++) {
			jsonArrayDateValue.push(value[i]);
			newdateDiv = addDateDiv(arrayValue, value[i],
					jsonArrayDateValue.length - 1, dateDiv, spanClassName,
					imageClassName);
			jsonDateDiv.appendChild(newdateDiv);
		}
		setDateValueToInput(arrayValue, jsonArrayDateValue);
		jsonArrayDateDiv.style.display = displayBlock;
	} else if (valueType == nullType) {
		var temp = '';
		for (var i = 0; i < value.length; i++) {
			temp = temp + "," + valueNull;
		}
		if (temp.charAt(0) === ',')
			temp = temp.substring(1);
		jsonArrayValue.value = temp;
	} else if (valueType == autoType) {
		var temp = '';
		for (var i = 0; i < value.length; i++) {
			if (value[i] === null) {
				temp = temp + "," + valueNull;
			} else {
				temp = temp + "," + value[i];
			}
		}
		if (temp.charAt(0) === ',')
			temp = temp.substring(1);
		jsonArrayValue.value = temp;
	} else if (valueType == objectsType) {
		jsonArrayValue.value = '';
		jsonArrayValue.disabled = true;
	}
}

function setJsonArrayValue(arrayBox, nameId, valueId, typeId, nameMandatoryId,
		valueMandatoryId, checkDateId) {
	document.getElementById(checkDateId).style.display = displayNone;
	var jsonArray = new JsonArray("", "");
	var isCheckPassed = true;
	var isValueCorrect = false;

	var jsonArrayNameDiv = document.getElementById(nameId);
	if (jsonArrayNameDiv.value === undefined || jsonArrayNameDiv.value === '') {
		isCheckPassed = false;
		document.getElementById(nameMandatoryId).style.display = displayBlock;
	} else {
		jsonArray.name = jsonArrayNameDiv.value;
	}
	var jsonArraySelect = document.getElementById(typeId);
	var typeValue = jsonArraySelect.options[jsonArraySelect.selectedIndex].value;
	jsonArray.valueType = typeValue;
	var jsonArrayValueDiv = document.getElementById(valueId);
	if (typeValue === stringType || typeValue === autoType
			|| typeValue === objectsType) {
		if (jsonArrayValueDiv.value === undefined) {
			isCheckPassed = false;
			document.getElementById(valueMandatoryId).style.display = displayBlock;
		}
	} else {
		if (jsonArrayValueDiv.value === undefined
				|| jsonArrayValueDiv.value === '') {
			isCheckPassed = false;
			document.getElementById(valueMandatoryId).style.display = displayBlock;
		}
	}
	if (isCheckPassed) {
		var isValueCorrect = checkArrayValue(valueId, typeId, valueMandatoryId,
				checkDateId);
		if (isValueCorrect) {
			var values = jsonArrayValueDiv.value.split(',');
			for (var i = 0; i < values.length; i++) {
				if (values[i] != null) {
					switch (typeValue) {
					case numberType:
						if (!isNaN(values[i])) {
							if (isFloat(values[i])) {
								jsonArray.value.push(parseFloat(values[i]));
							} else {
								jsonArray.value.push(parseInt(values[i]));
							}
						}
						break;
					case booleanType:
						if (values[i].toLowerCase() === 'true') {
							jsonArray.value.push(true);
						} else if (values[i].toLowerCase() === 'false') {
							jsonArray.value.push(false);
						}
						break;
					case nullType:
						if (values[i].toLowerCase() === 'null') {
							jsonArray.value.push(null);
						}
						break;
					case dateType:
						for ( var i in jsonArrayDateValue) {
							if (jsonArrayDateValue[i] !== null) {
								jsonArray.value.push(jsonArrayDateValue[i]);
							}
						}
						break;
					case autoType:
						if (values[i].toLowerCase() === 'null') {
							jsonArray.value.push(null);
						} else if (values[i].toLowerCase() === 'true') {
							jsonArray.value.push(true);
						} else if (values[i].toLowerCase() === 'false') {
							jsonArray.value.push(false);
						} else if (values[i].toLowerCase() === '') {
							jsonArray.value.push('');
						} else if (!isNaN(values[i])) {
							if (isFloat(values[i])) {
								jsonArray.value.push(parseFloat(values[i]));
							} else if (isInteger(values[i])) {
								jsonArray.value.push(parseInt(values[i]));
							} else {
								jsonArray.value.push(values[i]);
							}
						} else {
							jsonArray.value.push(values[i]);
						}
						break;
					case objectsType:
						break;
					default:
						jsonArray.value.push(values[i]);
					}
				}
			}
		}
	}
	if (!isCheckPassed || !isValueCorrect) {
		return;
	} else {
		if (arrayBox === overlayArrayBoxId) {
			var dropTarget = jQuery.data(document.getElementById(arrayBox),
					dropTargetDivKey);
			var bindObject = jQuery.data(dropTarget, attachedJsonObjectKey);
			bindObject.value.push(jsonArray);
			var data = createObjectDiv(jsonArray);
			document.getElementById(bindObject.tableId).appendChild(data.element);
			document.getElementById(bindObject.tableId).appendChild(data.table);
			document.getElementById(bindObject.imageId).style.visibility = displayVisible;
			closeOverLayVar(overlayDivId, overlayArrayBoxId, false);
			objectTreeDivOnClick(data.id);
		} else if (arrayBox === arrayBoxId) {
			var selectedObjectViewDiv = jQuery.data(document
					.getElementById(arrayBox), dropTargetDivKey);
			var bindObject = jQuery.data(selectedObjectViewDiv,
					attachedJsonObjectKey);
			if (bindObject.valueType === objectsType) {
				if (bindObject.tableId !== undefined
						&& bindObject.tableId !== '') {
					var tableElement = document
							.getElementById(bindObject.tableId);
					while (tableElement.firstChild) {
						tableElement.removeChild(tableElement.firstChild);
					}
					if (bindObject.imageId !== undefined
							&& bindObject.imageId !== '') {
						document.getElementById(bindObject.imageId).style.visibility = displayHidden;
					}
				}
			}
			bindObject.name = jsonArray.name;
			bindObject.value = jsonArray.value;
			bindObject.valueType = jsonArray.valueType;
			$(selectedObjectViewDiv).html(
					getFormattedTreeDivName(bindObject.name));
		}
		setFormattedJsonText();
		return;
	}
}

function addDate(dateInputId, valueMandatoryId, valueDivId, mandatoryId,
		dateDivId, spanClassName, imageClassName) {
	document.getElementById(mandatoryId).style.display = displayNone;
	var jsonArrayDateDiv = document.getElementById(dateInputId);
	var mandatory = document.getElementById(valueMandatoryId);
	if (jsonArrayDateDiv.value === undefined || jsonArrayDateDiv.value === '') {
		mandatory.innerHTML = selectDateMessage;
		mandatory.style.display = displayBlock;
	} else {
		mandatory.innerHTML = "";
		mandatory.style.display = displayNone;
		jsonArrayDateValue.push(jsonArrayDateDiv.valueAsDate);
		setDateValueToInput(valueDivId, jsonArrayDateValue);
		var dateDiv = document.getElementById(dateDivId);
		var newdateDiv = addDateDiv(valueDivId, jsonArrayDateDiv.valueAsDate,
				jsonArrayDateValue.length - 1, dateDivId, spanClassName,
				imageClassName);
		dateDiv.appendChild(newdateDiv);
		jsonArrayDateDiv.value = '';
	}
}

function setDateValueToInput(valueDivId, jsonArrayDateValue) {
	var jsonElementValueDiv = document.getElementById(valueDivId);
	jsonElementValueDiv.value = "";
	var temp = "";
	for (var i = 0; i < jsonArrayDateValue.length; i++) {
		if (jsonArrayDateValue[i] != null) {
			temp = temp + "," + jsonArrayDateValue[i].toLocaleDateString();
		}
	}
	if (temp.charAt(0) === ',')
		temp = temp.substring(1);
	jsonElementValueDiv.value = temp;
}

function addDateDiv(valueDivId, value, num, dateDivId, spanClassName,
		imageClassName) {
	var id = "date-" + num;
	var div = document.createElement("div");
	div.id = id;
	var span = document.createElement("span");
	span.className = spanClassName;
	span.innerHTML = value.toLocaleDateString();
	var img = document.createElement("img");
	img.src = deleteImagePath;
	img.className = imageClassName;
	img.addEventListener('click', function() {
		deleteDate(valueDivId, id, num, dateDivId);
	});
	div.appendChild(span);
	div.appendChild(img);
	return div
}

function deleteDate(valueDivId, id, num, dateDivId) {
	var dateDiv = document.getElementById(dateDivId);
	var dateToDelete = document.getElementById(id);
	dateDiv.removeChild(dateToDelete);
	jsonArrayDateValue[num] = null;
	setDateValueToInput(valueDivId, jsonArrayDateValue);
}

function closeArrayOverlay(overlayId, elementToolDiv, crossButton) {
	document.getElementById(overlayId).style.visibility = displayHidden;
	document.getElementById(elementToolDiv).style.display = displayNone;
	/* set display of mandatory text as none */
	document.getElementById(overlayArrayMandatoryName).style.display = displayNone;
	document.getElementById(overlayArrayMandatoryValue).style.display = displayNone;
	document.getElementById(overlayArrayCheckValue).style.display = displayNone;
	if (crossButton) {
		if (objectViewSelectId != null) {
			var objectView = document.getElementById(objectViewSelectId);
			objectView.style.background = objectViewDivBackground;
		}
		if (objectViewSelectId_2 != null) {
			var objectView = document.getElementById(objectViewSelectId_2);
			objectView.style.background = objectViewDivSelectBackground;
		}
		objectViewSelectId = objectViewSelectId_2;
	}
}

function checkArrayValueOnFocus(mandatoryDiv, typeId) {
	var jsonElementSelect = document.getElementById(typeId);
	var typeValue = jsonElementSelect.options[jsonElementSelect.selectedIndex].value;
	if (typeValue !== dateType) {
		document.getElementById(mandatoryDiv).style.display = displayNone;
	}
}

function checkArrayValue(valueTypeId, selectTypeId, mandatoryDiv, checkDiv) {
	var isValuePresent = true;
	var jsonArrayType = document.getElementById(selectTypeId);
	var typeValue = jsonArrayType.options[jsonArrayType.selectedIndex].value;
	var value = document.getElementById(valueTypeId).value;
	if (typeValue === stringType || typeValue === autoType
			|| typeValue === objectsType) {
		if (value === undefined) {
			document.getElementById(mandatoryDiv).style.display = displayBlock;
			document.getElementById(checkDiv).style.display = displayNone;
			isValuePresent = false;
		}
	} else {
		if (value === undefined || value === '') {
			document.getElementById(mandatoryDiv).style.display = displayBlock;
			document.getElementById(checkDiv).style.display = displayNone;
			isValuePresent = false;
		}
	}
	if (isValuePresent) {
		value = value.trim();
		var values = value.split(",");
		var isValueNotProper = false;
		var val;
		var message = "";
		if (typeValue === numberType) {
			for (var i = 0; i < values.length; i++) {
				val = values[i].trim();
				if (isNaN(val)) {
					isValueNotProper = true;
					message = allNumberMessage;
					break;
				}
			}
		} else if (typeValue === booleanType) {
			for (var i = 0; i < values.length; i++) {
				val = values[i].trim();
				if (val.toLowerCase() != 'true' && val.toLowerCase() != 'false') {
					isValueNotProper = true;
					message = allBooleanMessage;
					break;
				}
			}
		} else if (typeValue === nullType) {
			for (var i = 0; i < values.length; i++) {
				val = values[i].trim();
				if (val.toLowerCase() != 'null') {
					isValueNotProper = true;
					message = allNullMessage;
					break;
				}
			}
		}
		if (isValueNotProper && values.length > 0) {
			var check = document.getElementById(checkDiv);
			check.innerHTML = message;
			check.style.display = displayBlock;
			return false;
		} else {
			document.getElementById(checkDiv).style.display = displayNone;
			return true;
		}
	} else {
		return false;
	}

}

function changeJsonArrayValueType(valueTypeId, selectTypeId, arrayDateDivId,
		checkDiv, valueMandatoryId, dateTypeId, dateDiv) {
	var jsonArrayInput = document.getElementById(valueTypeId);
	var jsonArrayType = document.getElementById(selectTypeId);
	var jsonArrayDateDiv = document.getElementById(arrayDateDivId);
	var value = jsonArrayType.options[jsonArrayType.selectedIndex].value;
	var jsonArrayCheckDiv = document.getElementById(checkDiv);
	jsonArrayCheckDiv.style.display = displayNone;
	jsonArrayInput.readOnly = false;
	jsonArrayInput.disabled = false;
	if (value == dateType) {
		jsonArrayInput.value = "";
		jsonArrayInput.readOnly = true;
		jsonArrayDateDiv.style.display = displayBlock;
		checkElementOnFocus(valueMandatoryId);
	} else if (value == objectsType) {
		jsonArrayInput.value = "";
		jsonArrayInput.disabled = true;
		jsonArrayDateDiv.style.display = displayNone;
		document.getElementById(dateTypeId).value = "";
		document.getElementById(dateDiv).innerHTML = "";
		jsonArrayDateValue = [];
		checkElementOnFocus(valueMandatoryId);
	} else {
		jsonArrayInput.value = "";
		jsonArrayDateDiv.style.display = displayNone;
		document.getElementById(dateTypeId).value = "";
		document.getElementById(dateDiv).innerHTML = "";
		jsonArrayDateValue = [];
		jsonArrayInput.focus();
	}
}

function arrayDivOverlay() {
	var overlayDiv = getDivWithIdAndClass('array-toolbox-overlay',
			'array-toolbox-overlay');
	var titleBar = createOverlayTitleBar('Json Array', closeOverLayVar,
			'overlay');
	var arrayDiv = getDivWithIdAndClass('array-box', 'array-box');
	arrayDiv.appendChild(arrayNameOverlay());
	arrayDiv.appendChild(arrayValueOverlay());
	arrayDiv.appendChild(arrayTypeOverlay());
	arrayDiv.appendChild(arrayButtonOverlay());

	overlayDiv.appendChild(titleBar);
	overlayDiv.appendChild(arrayDiv);
	return overlayDiv;
}

function arrayDiv() {
	var arrayDiv = getDivWithIdAndClass('json-array-box', 'json-array-box');
	arrayDiv.appendChild(arrayName());
	arrayDiv.appendChild(arrayValue());
	arrayDiv.appendChild(arrayType());
	arrayDiv.appendChild(arrayButton());
	return arrayDiv;
}

function arrayNameOverlay() {
	var nameDiv = getPropertyDiv('property-div');
	var name = getPropertyDivText('property-name', 'Name :- ');
	var input = getPropertyDivInput('array-name', 'text', 'width:70%');
	input.addEventListener('blur', function() {
		checkElementOnblur('array-name', 'array-name-mandatory-overlay');
	});
	input.addEventListener('focus', function() {
		checkElementOnFocus('array-name-mandatory-overlay');
	});
	var nameMandatory = getMandatoryText('array-name-mandatory-overlay',
			'mandatory-text-overlay', '* Name is a Mandatory Field');
	nameDiv.appendChild(name);
	nameDiv.appendChild(input);
	nameDiv.appendChild(document.createElement('br'));
	nameDiv.appendChild(nameMandatory);
	return nameDiv;
}

function arrayName() {
	var nameDiv = getPropertyDiv('json-property-div');
	var name = getPropertyDivText('json-property-name', 'Name :- ');
	var input = getPropertyDivInput('json-array-name', 'text', 'width:60%');
	input.addEventListener('blur', function() {
		checkElementOnblur('json-array-name', 'array-name-mandatory-text');
	});
	input.addEventListener('focus', function() {
		checkElementOnFocus('array-name-mandatory-text');
	});
	var nameMandatory = getMandatoryText('array-name-mandatory-text',
			'mandatory-text', '* Name is a Mandatory Field');
	nameDiv.appendChild(name);
	nameDiv.appendChild(input);
	nameDiv.appendChild(nameMandatory);
	return nameDiv;
}

function arrayValueOverlay() {
	var outerValueDiv = getPropertyDiv('property-div');

	var valueDiv = getPropertyDiv('array-div-value');
	var value = getPropertyDivText('property-value', 'Value :- ');
	var input = getPropertyDivInput('array-value', 'text', 'width:70%');
	input.addEventListener('blur', function() {
		checkArrayValue('array-value', 'array-type',
				'array-value-mandatory-overlay', 'array-value-check-overlay');
	});
	input.addEventListener('focus', function() {
		checkArrayValueOnFocus('array-value-mandatory-overlay', 'array-type');
	});
	var tooltip = document.createElement('div');
	$(tooltip).addClass('tool-tip-text');
	$(tooltip).html('Enter Comma Separated Values without quotes');
	valueDiv.appendChild(value);
	valueDiv.appendChild(input);
	valueDiv.appendChild(tooltip);
	outerValueDiv.appendChild(valueDiv);

	outerValueDiv.appendChild(getDateDiv('array-date-div', 'date-div',
			'width:70%', 'array-date-value', 'array-date-value-add',
			'array-date-value', 'array-value-check-overlay',
			'array-value-mandatory-overlay', 'array-value', 'add-date',
			'delete-image'));
	outerValueDiv.appendChild(getMandatoryText('array-value-check-overlay',
			'mandatory-text-overlay', ''));
	outerValueDiv.appendChild(getMandatoryText('array-value-mandatory-overlay',
			'mandatory-text-overlay', '* Value is a Mandatory Field'));
	return outerValueDiv;
}

function arrayValue() {
	var outerValueDiv = getPropertyDiv('json-property-div');

	var valueDiv = getPropertyDiv('json-array-div-value');
	var value = getPropertyDivText('json-property-value', 'Value :- ');
	var input = getPropertyDivInput('json-array-value', 'text', 'width:60%');
	input.addEventListener('blur', function() {
		checkArrayValue('json-array-value', 'json-array-type',
				'array-value-mandatory-text', 'array-value-check-text');
	});
	input.addEventListener('focus',
			function() {
				checkArrayValueOnFocus('array-value-mandatory-text',
						'json-array-type');
			});
	var tooltip = document.createElement('div');
	$(tooltip).addClass('tool-tip-text');
	$(tooltip).html('Enter Comma Separated Values without quotes');
	valueDiv.appendChild(value);
	valueDiv.appendChild(input);
	valueDiv.appendChild(tooltip);
	outerValueDiv.appendChild(valueDiv);

	outerValueDiv.appendChild(getDateDiv('json-array-date-div',
			'json-date-div', 'width:60%', 'json-array-date-value',
			'json-array-date-value-add', 'json-array-date-value',
			'array-value-check-text', 'array-value-mandatory-text',
			'json-array-value', 'json-add-date', 'json-delete-image'));
	outerValueDiv.appendChild(getMandatoryText('array-value-mandatory-text',
			'mandatory-text', '* Value is a Mandatory Field'));
	outerValueDiv.appendChild(getMandatoryText('array-value-check-text',
			'mandatory-text', ''));
	return outerValueDiv;
}

function arrayTypeOverlay() {
	var typeDiv = getPropertyDiv('property-div');
	var type = getPropertyDivText('property-type', 'Type :- ');
	var select = getPropertyDivSelect('array-type');
	$(select).append(
			$("<option></option>").attr('value', 'objects').text('Objects'));
	select.addEventListener('change', function() {
		changeJsonArrayValueType('array-value', 'array-type', 'array-date-div',
				'array-value-check-overlay', 'array-value-mandatory-overlay',
				'array-date-value', 'date-div');
	});
	typeDiv.appendChild(type);
	typeDiv.appendChild(select);
	return typeDiv;
}

function arrayType() {
	var typeDiv = getPropertyDiv('json-property-div');
	var type = getPropertyDivText('json-property-type', 'Type :- ');
	var select = getPropertyDivSelect('json-array-type');
	$(select).append(
			$("<option></option>").attr('value', 'objects').text('Objects'));
	select.addEventListener('change', function() {
		changeJsonArrayValueType('json-array-value', 'json-array-type',
				'json-array-date-div', 'array-value-check-text',
				'array-value-mandatory-text', 'json-array-date-value',
				'json-date-div');
	});
	typeDiv.appendChild(type);
	typeDiv.appendChild(select);
	return typeDiv;
}

function arrayButtonOverlay() {
	var setDiv = getPropertyDiv('property-div');
	var button = getPropertyDivButton('array-set', 'button', 'button-set',
			'Set');
	button.addEventListener('click', function() {
		setJsonArrayValue('array-toolbox-overlay', 'array-name', 'array-value',
				'array-type', 'array-name-mandatory-overlay',
				'array-value-mandatory-overlay', 'array-value-check-overlay');
	});
	setDiv.appendChild(button);
	return setDiv;
}

function arrayButton() {
	var setDiv = getPropertyDiv('json-property-div');
	var button = getPropertyDivButton('json-array-set', 'button',
			'json-button-set', 'Set');
	button.addEventListener('click', function() {
		setJsonArrayValue('json-array-box', 'json-array-name',
				'json-array-value', 'json-array-type',
				'array-name-mandatory-text', 'array-value-mandatory-text',
				'array-value-check-text');
	});
	setDiv.appendChild(button);
	return setDiv;
}

function setJsonObjectValue(objectBox,nameId,nameMandatoryId){
    var jsonObject = new JsonObject("","","");
    var isCheckPassed = true;
    var jsonObjectNameDiv = document.getElementById(nameId);
    if(jsonObjectNameDiv.value === undefined || jsonObjectNameDiv.value === ''){
        isCheckPassed = false;
        document.getElementById(nameMandatoryId).style.display = displayBlock;
    }else{
        jsonObject.name = jsonObjectNameDiv.value;
    }
    if(!isCheckPassed){
        return;
    }else{
        if(objectBox === overlayObjectBoxId){
            var dropTarget = jQuery.data(document.getElementById(objectBox),dropTargetDivKey);
            var bindObject = jQuery.data(dropTarget,attachedJsonObjectKey);
            jsonObject.parent = objectDragObjectType;
            bindObject.value.push(jsonObject);
            var data = createObjectDiv(jsonObject);
            document.getElementById(bindObject.tableId).appendChild(data.element);
            document.getElementById(bindObject.tableId).appendChild(data.table);
            document.getElementById(bindObject.imageId).style.visibility = displayVisible;
            closeOverLayVar(overlayDivId,false);
            objectTreeDivOnClick(data.id);
        }else if(objectBox === objectBoxId){
            var selectedObjectViewDiv = jQuery.data(document.getElementById(objectBox),dropTargetDivKey);
            var bindObject = jQuery.data(selectedObjectViewDiv,attachedJsonObjectKey);
            bindObject.name = jsonObject.name;
            $(selectedObjectViewDiv).html(getFormattedTreeDivName(bindObject.name));
        }
        setFormattedJsonText();
        return;
    }
}

function setObjectBoxInitialValues(jsonObject,objectName,objectMandatoryName){
    var name = jsonObject.name;
    document.getElementById(objectMandatoryName).style.display = displayNone;
    document.getElementById(objectName).value = name;
}

function objectDivOverlay(){
    var outerObjectDiv = getDivWithIdAndClass('object-toolbox-overlay','object-toolbox-overlay');
    var titleBar = createOverlayTitleBar('Json Object',closeOverLayVar,'overlay');
    var objectDiv = getDivWithIdAndClass('object-box','element-box');
    objectDiv.appendChild(objectNameOverlay());
    objectDiv.appendChild(objectButtonOverlay());
    outerObjectDiv.appendChild(titleBar);
    outerObjectDiv.appendChild(objectDiv);
    return outerObjectDiv;
}

function objectDiv(){
    var objectDiv = getDivWithId('json-object-box');
    objectDiv.appendChild(objectName());
    objectDiv.appendChild(objectButton());
    return objectDiv;
}

function objectNameOverlay(){
    var nameDiv = getPropertyDiv('property-div');
    var name = getPropertyDivText('property-name','Name :- ');
    var input = getPropertyDivInput('object-name','text','width:70%');
    input.addEventListener('blur',function(){
        checkElementOnblur('object-name','object-name-mandatory-overlay');
    });
    input.addEventListener('focus',function(){
        checkElementOnFocus('object-name-mandatory-overlay');
    });
    var nameMandatory = getMandatoryText('object-name-mandatory-overlay','mandatory-text-overlay','* Name is a Mandatory Field');
    nameDiv.appendChild(name);
    nameDiv.appendChild(input);
    nameDiv.appendChild(nameMandatory);
    return nameDiv;
}

function objectName(){
    var nameDiv = getPropertyDiv('json-property-div');
    var name = getPropertyDivText('json-property-name','Name :- ');
    var input = getPropertyDivInput('json-object-name','text','width:60%');
    input.addEventListener('blur',function(){
        checkElementOnblur('json-object-name','object-name-mandatory-text');
    });
    input.addEventListener('focus',function(){
        checkElementOnFocus('object-name-mandatory-text');
    });
    var nameMandatory = getMandatoryText('object-name-mandatory-text','mandatory-text','* Name is a Mandatory Field');
    nameDiv.appendChild(name);
    nameDiv.appendChild(input);
    nameDiv.appendChild(nameMandatory);
    return nameDiv;
}

function objectButtonOverlay(){
    var setDiv = getPropertyDiv('property-div');
    var button = getPropertyDivButton('object-set','button','button-set','Set');
    button.addEventListener('click',function(){
        setJsonObjectValue('object-toolbox-overlay','object-name','object-name-mandatory-overlay');
    });
    setDiv.appendChild(button);
    return setDiv;
}

function objectButton(){
    var setDiv = getPropertyDiv('json-property-div');
    var button = getPropertyDivButton('json-object-set','button','json-button-set','Set');
    button.addEventListener('click',function(){
        setJsonObjectValue('json-object-box','json-object-name','object-name-mandatory-text');
    });
    setDiv.appendChild(button);
    return setDiv;
}

function loadStartingJson(){
	var jsObject = {};
	jsObject[stringType] = 'Hello';
	jsObject[numberType] = 1;
	jsObject[booleanType] = false;	
	var date = new Date();
	jsObject[dateType] = date;
	jsObject['array'] = ['a','b','c','d'];
	jsObject['object'] = {};
	jsObject.object['objectString'] = 'Hello';
	jsObject.object['objectNumber'] = 1;
	jsObject.object['objectBoolean'] = false;
	
	document.getElementById(jsonTextViewId).value = JSON.stringify(jsObject,null,'\t');
	jsObject = JSON.parse(document.getElementById(jsonTextViewId).value);
	var rootTable = document.getElementById(rootObjectTableId);
    while(rootTable.firstChild){
        rootTable.removeChild(rootTable.firstChild);
    }
    parseToJsObject(jsObject,rootJsonObject);
    objectTreeDivOnClick(rootObjectViewId);
}

function parseToJsObject(jsObject,jsonObject){
    if(jsObject !== null){
        for(var prop in jsObject){
            if(typeof jsObject[prop] === 'string'){     
            	if(isDate(jsObject[prop])){
            		var date = Date.parse(jsObject[prop]);
            		parseJsonElement(jsonObject,prop,new Date(date),'date');            		
            	}else{            		
            		parseJsonElement(jsonObject,prop,jsObject[prop],'string');
            	}                
            }else if(typeof jsObject[prop] === 'number'){
                parseJsonElement(jsonObject,prop,jsObject[prop],'number');
            }else if(typeof jsObject[prop] === 'boolean'){
                parseJsonElement(jsonObject,prop,jsObject[prop],'boolean');
            }else if(typeof jsObject[prop] === 'object'){
                if(jsObject[prop] === null){
                    parseJsonElement(jsonObject,prop,jsObject[prop],'null');
                }else if(Object.prototype.toString.call(jsObject[prop]) === '[object Array]'){
                    parseJsonArray(jsonObject,prop,jsObject[prop]);
                }else if(Object.prototype.toString.call(jsObject[prop]) === '[object Object]'){
                    parseJsonObject(jsonObject,prop,jsObject[prop],objectDragObjectType);
                }
            }
        }
    }
}

function parseJsonObject(parentObj,name,jsObject,parentType){
    var jsonObj = new JsonObject(name,'','');
    jsonObj.parent = parentType;
    parentObj.value.push(jsonObj);
    var data = createObjectDiv(jsonObj);
    document.getElementById(parentObj.tableId).appendChild(data.element);
    document.getElementById(parentObj.tableId).appendChild(data.table);
    document.getElementById(parentObj.imageId).style.visibility = displayVisible;
    parseToJsObject(jsObject,jsonObj);
}

function parseJsonArray(parentObj,name,values){
    var jsonArrayObj = new JsonArray(name,'');
    jsonArrayObj.valueType = 'auto';
    parentObj.value.push(jsonArrayObj);
    var data = createObjectDiv(jsonArrayObj);
    document.getElementById(parentObj.tableId).appendChild(data.element);
    document.getElementById(parentObj.tableId).appendChild(data.table);
    document.getElementById(parentObj.imageId).style.visibility = displayVisible;
    if(values !== null){
    	var temp = new Array();
        for(var val in values){
            if(typeof values[val] === 'object'){
                if(Object.prototype.toString.call(values[val]) === '[object Object]'){
                    parseJsonObject(jsonArrayObj,val,values[val],objectDragArrayType);
                    jsonArrayObj.valueType = 'objects';
                }else if(val === null){
                	temp.push(values[val]);
                }
            }else{
            	temp.push(values[val]);
            }            
        }
    }
    if(jsonArrayObj.valueType !== objectsType){
    	jsonArrayObj.value = temp;  
    }
}

function parseJsonElement(parentObj,name,value,valueType){
    var jsonElement = new JsonElement(name,value,valueType);
    parentObj.value.push(jsonElement);
    var data = createElementDiv(jsonElement);
    document.getElementById(parentObj.tableId).appendChild(data.element);
    document.getElementById(parentObj.imageId).style.visibility = displayVisible;
}

function expandJsonObjectView(objectViewTableId,largeObjectViewId,overlayId){
    var overlay = document.getElementById(overlayId);
    overlay.appendChild(createLargeObjectViewOverlay());
    overlay.style.visibility = displayVisible;
    var tableView = document.getElementById(objectViewTableId);
    var largeView = document.getElementById(largeObjectViewId);
    largeView.appendChild(tableView);
}

function expandJsonTextView(textAreaId,largeTextAreaId,overlayId){
    var overlay = document.getElementById(overlayId);
    overlay.appendChild(createLargeTextViewOverlay());
    overlay.style.visibility = displayVisible;
    document.getElementById(largeTextAreaId).value = document.getElementById(textAreaId).value;
}

var closeLargeTextOverlayVar = function closeLargeTextOverlay(overlayId){
    closeLargeOverlay(overlayId);
}

var closeLargeObjectOverlayVar = function closeLargeObjectOverlay(overlayId){
    var tableView = document.getElementById('json-object-view-table');
    var view = document.getElementById('json-object-view');
    view.appendChild(tableView);
    closeLargeOverlay(overlayId);
}

function closeLargeOverlay(overlayId){
    var overlay = document.getElementById(overlayId);
    while(overlay.firstChild){
        overlay.removeChild(overlay.firstChild);
    }
    overlay.style.visibility = displayHidden;
}

function createLargeTextViewOverlay(){
    var jsonTextView = getDivWithIdAndClass('large-json-text-view','large-json-text-view');
    var textArea = document.createElement('textarea');
    $(textArea).addClass('large-json-text');
    $(textArea).attr('id','large-json-text');
    $(textArea).attr('readonly','readonly');
    jsonTextView.appendChild(createLargeOverlayTitleBar('Json Text View',closeLargeTextOverlayVar,'large-json-overlay'));
    jsonTextView.appendChild(textArea);
    return jsonTextView;
}

function createLargeObjectViewOverlay(){
    var jsonObjectView = getDivWithIdAndClass('large-json-object-view','large-json-text-view');
    var objectView = getDivWithIdAndClass('large-json-object','large-json-object');
    jsonObjectView.appendChild(createLargeOverlayTitleBar('Json Object View',closeLargeObjectOverlayVar,'large-json-overlay'));
    jsonObjectView.appendChild(objectView);
    return jsonObjectView;
}

function createOverlayTitleBar(spanText,closeEvent,overlayId){
    var titleBar = document.createElement('div');
    $(titleBar).addClass('overlay-title-bar');
    var title = document.createElement('span');
    $(title).addClass('overlay-title');
    $(title).html(spanText);
    var closeImage = document.createElement('img');
    $(closeImage).addClass('close-overlay');
    $(closeImage).attr('alt',imageAlt);
    $(closeImage).attr('src',deleteImagePath);
    closeImage.addEventListener('click',function(){
        closeEvent(overlayId,true);
    });
    titleBar.appendChild(title);
    titleBar.appendChild(closeImage);
    return titleBar;
}

function createLargeOverlayTitleBar(spanText,closeEvent,overlayId){
    var titleBar = document.createElement('div');
    $(titleBar).addClass('overlay-title-bar');
    var title = document.createElement('span');
    $(title).addClass('overlay-title');
    $(title).html(spanText);
    var closeImage = document.createElement('img');
    $(closeImage).addClass('close-overlay');
    $(closeImage).attr('alt',imageAlt);
    $(closeImage).attr('src',deleteImagePath);
    closeImage.addEventListener('click',function(){
        closeEvent(overlayId);
    });
    titleBar.appendChild(title);
    titleBar.appendChild(closeImage);
    return titleBar;
}

function getDivWithId(id){
    var div = document.createElement('div');
    $(div).attr('id',id);
    return div;
}

function getDivWithIdAndClass(id,className){
    var div = document.createElement('div');
    $(div).attr('id',id);
    $(div).addClass(className);
    return div;
}

function getMandatoryText(divId,className,text){
    var mandatory = document.createElement('div');
    $(mandatory).attr('id',divId);
    $(mandatory).addClass(className);
    $(mandatory).html(text);
    return mandatory;
}

function getPropertyDivText(spanClassName,spanText){
    var text = document.createElement('span');
    $(text).addClass(spanClassName);
    $(text).html(spanText);
    return text;
}

function getPropertyDiv(divClassName){
    var div = document.createElement('div');
    $(div).addClass(divClassName);
    return div;
}

function getPropertyDivInput(id,type,style){
    var input = document.createElement('input');
    $(input).attr('id',id);
    $(input).attr('type',type);
    $(input).attr('style',style);
    return input;
}

function getPropertyDivButton(id,type,className,text){
    var button = document.createElement('button');
    $(button).attr('id',id);
    $(button).attr('type',type);
    $(button).addClass(className);
    $(button).html(text);
    return button;
}

function getImage(id,imagePath,className){
	var image = document.createElement("img");
    $(image).addClass(className);
    $(image).attr('id',id);
    $(image).attr('src',imagePath);
    return image;  
}

function getDateDiv(arrayDateDivId,dateDivId,dateDivStyle,inputId,dateValueAddId,arrayDateValue,arrayValueCheck,
		arrayValueMandatory,arrayValue,addDateId,deleteImage) {
	var arrayDateDiv = getDivWithId(arrayDateDivId);
	$(arrayDateDiv).attr('style', 'display:none');
	var dateDiv = getDivWithId(dateDivId);	
	var input = getPropertyDivInput(inputId,'date',dateDivStyle);
	$(input).addClass('json-array-date');	
	var button = document.createElement('button');
	$(button).attr('id', dateValueAddId);
	$(button).attr('type', 'button');
	$(button).attr('style', 'height: 24px');
	$(button).html('Add');
	button.addEventListener('click', function() {
		addDate(arrayDateValue, arrayValueCheck,arrayValue, arrayValueMandatory,dateDivId, addDateId, deleteImage);
	});
	arrayDateDiv.appendChild(dateDiv);
	arrayDateDiv.appendChild(input);
	arrayDateDiv.appendChild(button);
	return arrayDateDiv;
}

function getPropertyDivSelect(id){
    var select = document.createElement('select');
    $(select).attr('id',id);
    $(select).append($("<option></option>").attr('value','auto').text('Auto'));
    $(select).append($("<option></option>").attr('value','string').text('String'));
    $(select).append($("<option></option>").attr('value','number').text('Number'));
    $(select).append($("<option></option>").attr('value','boolean').text('Boolean'));
    $(select).append($("<option></option>").attr('value','date').text('Date'));
    $(select).append($("<option></option>").attr('value','null').text('Null'));
    return select;
}

function getPropertyDivRadio(id,value){
    var radioInput = document.createElement('input');
    $(radioInput).attr('id',id);
    $(radioInput).attr('type','radio');
    $(radioInput).attr('name','radioValue');
    $(radioInput).attr('value',value);
    return radioInput;
}

function getPropertyBooleanBox(radioDivId,radioTrueId,radioFalseId,spanClassName,mandatoryValueId){
	var radioDiv = document.createElement('div');
    $(radioDiv).attr('id',radioDivId);
    $(radioDiv).attr('style','display:none');
    var radioTrueInput = getPropertyDivRadio(radioTrueId,'true');
    radioTrueInput.addEventListener('click',function(){
        setElementBooleanValue(mandatoryValueId);
    });
    radioTrueInput.addEventListener('focus',function(){
        checkElementOnFocus(mandatoryValueId);
    });
    var trueValue = getPropertyDivText(spanClassName,'True');
    var radioFalseInput = getPropertyDivRadio(radioFalseId,'false');
    radioFalseInput.addEventListener('click',function(){
        setElementBooleanValue(mandatoryValueId);
    });
    var falseValue = getPropertyDivText(spanClassName,'False');
    radioDiv.appendChild(radioTrueInput);
    radioDiv.appendChild(trueValue);
    radioDiv.appendChild(radioFalseInput);
    radioDiv.appendChild(falseValue);
    return radioDiv;
}

function newJson(){
	var rootTable = document.getElementById(rootObjectTableId);
    while(rootTable.firstChild){
        rootTable.removeChild(rootTable.firstChild);
    }
    document.getElementById(rootObjectViewId).style.background = objectViewDivBackground;
    objectViewSelectId = null;
    unCopy();
    rootJsonObject.value = new Array();
    setFormattedJsonText();
}

function copy(){	
	if(objectViewSelectId === null){
		alert(noneSelectedCopyMessage);
	}else{
		document.getElementById('copy-json-element').src = copySelectImagePath;
		isCopyMode = true;
		copyObjectViewId = objectViewSelectId;
	}
}

function unCopy(){
	document.getElementById('copy-json-element').src = copyImagePath;
	isCopyMode = false;
	copyObjectViewId = null;
}

function objectTreeDivOnClick(divId){
    if(objectViewSelectId != null){
        var objectView = document.getElementById(objectViewSelectId);
        if(objectView != null){
            objectView.style.background = objectViewDivBackground;
        }
    }
    var objectView = document.getElementById(divId);
    objectView.style.background = objectViewDivSelectBackground;
    objectViewSelectId = divId;
    
    if(isCopyMode){
    	var name = paste();
    	unCopy();
		if(name === objectViewSelectId){
			hidePropertyBox(propertyBox);
	        if(divId !== rootObjectViewId){
	            setAndShowPropertyBox(objectView);
	        }
		}else{
			objectTreeDivOnClick(name);
		}		
    }else{
    	hidePropertyBox(propertyBox);
        if(divId !== rootObjectViewId){
            setAndShowPropertyBox(objectView);
        }
    }    
}

function paste(){
	var returnData = objectViewSelectId;
	var copyElement = document.getElementById(copyObjectViewId);
	var copyObject = jQuery.data(copyElement,attachedJsonObjectKey);
	var pasteElement = document.getElementById(objectViewSelectId);
	var pasteObject = jQuery.data(pasteElement,attachedJsonObjectKey);
	var isAllowed = allowDrop(copyObject.type,pasteObject);
    if(isAllowed){
    	var isPresent = false;
    	var counter = 0;
    	var name = '';
    	while(true){    		
    		for(var i in pasteObject.value){
        		if(pasteObject.value[i].name === (copyObject.name + name)){
        			isPresent = true;
        			break;
        		}
        	}
    		if(isPresent){
    			counter = counter + 1;
    			name = ' - '+counter;
    			isPresent = false;
    		}else{
    			break;
    		}
    	}
    	var newObject = cloneObject(pasteObject,copyObject,name);        	
    	if(newObject !== null){
    		if(pasteObject.type === objectDragArrayType){
    			newObject.name = pasteObject.value.length;        			
    			var id = newObject.divId;       			
    			$(document.getElementById(id)).html(getFormattedTreeDivName(newObject.name));        			
    			pasteObject.value.push(newObject);
    		}else{
    			pasteObject.value.push(newObject);
    		}
    		setFormattedJsonText();
    		returnData = newObject.divId;
    	}
    }
    return returnData;
}

function cloneObject(parectObject,jsonObject,nameSuffix){
	var newObject = null;
	if(jsonObject.type === objectDragElementType){
		newObject = new JsonElement(jsonObject.name + nameSuffix,'',jsonObject.valueType);
		var data = createElementDiv(newObject);
        document.getElementById(parectObject.tableId).appendChild(data.element);
        document.getElementById(parectObject.imageId).style.visibility = displayVisible;
		if(jsonObject.valueType === dateType){
			newObject.value = new Date(jsonObject.value.toUTCString());
		}else {
			newObject.value = jsonObject.value;
		}				
	}else if(jsonObject.type === objectDragArrayType){
		newObject = new JsonArray(jsonObject.name + nameSuffix, jsonObject.valueType);
		var data = createObjectDiv(newObject);
        document.getElementById(parectObject.tableId).appendChild(data.element);
        document.getElementById(parectObject.tableId).appendChild(data.table);
        document.getElementById(parectObject.imageId).style.visibility = displayVisible;
		if(jsonObject.valueType === dateType){
			for(var i in jsonObject.value){
				newObject.value.push(new Date(jsonObject.value[i].toUTCString()));
			}
		}else if(jsonObject.valueType === objectsType){
			for(var i in jsonObject.value){
				newObject.value.push(cloneObject(newObject,jsonObject.value[i],''));
			}
		}else {
			for(var i in jsonObject.value){
				newObject.value.push(jsonObject.value[i]);
			}
		}		
	}else if(jsonObject.type === objectDragObjectType){
		newObject = new JsonObject(jsonObject.name + nameSuffix);
		newObject.parent = parectObject.type;
		var data = createObjectDiv(newObject);
        document.getElementById(parectObject.tableId).appendChild(data.element);
        document.getElementById(parectObject.tableId).appendChild(data.table);
        document.getElementById(parectObject.imageId).style.visibility = displayVisible;
		for(var i in jsonObject.value){
			newObject.value.push(cloneObject(newObject,jsonObject.value[i],''));
		}
	}
	return newObject;
}

function saveToDisk() {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:application/json;charset=utf-8,'
			+ encodeURIComponent(document.getElementById(jsonTextViewId).value));
	element.setAttribute('download', 'JsonFile.json');
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function saveToCloud(){		
	alert(CloudConnectionProblemMessage);
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function load(){
	loadStartingJson();
}

function loadJson(){
    var jsonText = document.getElementById(jsonTextViewId).value;
    loadJsonToTool(jsonText);
}

function loadJsonToTool(jsonText){
	var jsObject = JSON.parse(jsonText);
	if(jsObject !== null){
	    var rootTable = document.getElementById(rootObjectTableId);
	    while(rootTable.firstChild){
	        rootTable.removeChild(rootTable.firstChild);
	    }	    
	    objectViewSelectId = null;
	    unCopy();
	    rootJsonObject.value = new Array();
	    parseToJsObject(jsObject,rootJsonObject);
	    objectTreeDivOnClick(rootObjectViewId);
	    setFormattedJsonText();
	}
}

function closeHelpOverlay(overlayId,outerDivId){
    document.getElementById(overlayId).style.visibility = displayHidden;
    document.getElementById(outerDivId).style.visibility = displayHidden;
}

function openHelpOverlay(overlayId,outerDivId){
    document.getElementById(overlayId).style.visibility = displayVisible;
    document.getElementById(outerDivId).style.visibility = displayVisible;
}

function isDate(value){	
	if(moment(value,'YYYY-MM-DD',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ssZ',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mmZ',true).isValid() ||			
			moment(value,'YYYY-MM-DDThh:mm:ss.s',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.sZ',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.ss',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.ssZ',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.sss',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.sssZ',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.sss+hh:mm',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.sss-hh:mm',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.ss+hh:mm',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.ss-hh:mm',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.s+hh:mm',true).isValid() ||
			moment(value,'YYYY-MM-DDThh:mm:ss.s-hh:mm',true).isValid()){
		return true;
	}
	return false;
}
