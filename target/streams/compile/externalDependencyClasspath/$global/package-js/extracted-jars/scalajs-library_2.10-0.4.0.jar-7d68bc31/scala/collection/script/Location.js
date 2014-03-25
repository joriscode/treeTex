/** @constructor */
ScalaJS.c.scala_collection_script_Location = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_script_Location.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_script_Location.prototype.constructor = ScalaJS.c.scala_collection_script_Location;
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Location = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Location.prototype = ScalaJS.c.scala_collection_script_Location.prototype;
ScalaJS.is.scala_collection_script_Location = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Location)))
});
ScalaJS.as.scala_collection_script_Location = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Location(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Location")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Location = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Location)))
});
ScalaJS.asArrayOf.scala_collection_script_Location = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Location(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Location;", depth)
  }
});
ScalaJS.data.scala_collection_script_Location = new ScalaJS.ClassTypeData({
  scala_collection_script_Location: 0
}, false, "scala.collection.script.Location", ScalaJS.data.java_lang_Object, {
  scala_collection_script_Location: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Location.prototype.$classData = ScalaJS.data.scala_collection_script_Location;
//@ sourceMappingURL=Location.js.map
