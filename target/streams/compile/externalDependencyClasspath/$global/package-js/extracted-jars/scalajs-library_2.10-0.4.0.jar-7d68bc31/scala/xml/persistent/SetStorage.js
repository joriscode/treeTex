/** @constructor */
ScalaJS.c.scala_xml_persistent_SetStorage = (function() {
  ScalaJS.c.scala_xml_persistent_CachedFileStorage.call(this);
  this.scala$xml$persistent$SetStorage$$theSet$3 = null
});
ScalaJS.c.scala_xml_persistent_SetStorage.prototype = new ScalaJS.inheritable.scala_xml_persistent_CachedFileStorage();
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.constructor = ScalaJS.c.scala_xml_persistent_SetStorage;
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.scala$xml$persistent$SetStorage$$theSet__Lscala_collection_mutable_HashSet = (function() {
  return this.scala$xml$persistent$SetStorage$$theSet$3
});
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.scala$xml$persistent$SetStorage$$theSet$und$eq__p3__Lscala_collection_mutable_HashSet__V = (function(x$1) {
  this.scala$xml$persistent$SetStorage$$theSet$3 = x$1
});
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.$$plus$eq__Lscala_xml_Node__V = (function(e) {
  this.dirty$und$eq__Z__V(true);
  this.scala$xml$persistent$SetStorage$$theSet__Lscala_collection_mutable_HashSet().$$plus$eq__O__Lscala_collection_mutable_HashSet(e)
});
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.$$minus$eq__Lscala_xml_Node__V = (function(e) {
  this.dirty$und$eq__Z__V(true);
  this.scala$xml$persistent$SetStorage$$theSet__Lscala_collection_mutable_HashSet().$$minus$eq__O__Lscala_collection_mutable_HashSet(e)
});
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.nodes__Lscala_collection_Iterator = (function() {
  return this.scala$xml$persistent$SetStorage$$theSet__Lscala_collection_mutable_HashSet().iterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.init___Ljava_io_File = (function(file) {
  ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.init___Ljava_io_File.call(this, file);
  this.scala$xml$persistent$SetStorage$$theSet$3 = new ScalaJS.c.scala_collection_mutable_HashSet().init___();
  var it = ScalaJS.c.scala_xml_persistent_CachedFileStorage.prototype.initialNodes__Lscala_collection_Iterator.call(this);
  this.dirty$und$eq__Z__V(it.hasNext__Z());
  it.foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(x) {
      return arg$outer.scala$xml$persistent$SetStorage$$theSet__Lscala_collection_mutable_HashSet().$$plus$eq__O__Lscala_collection_mutable_HashSet(x)
    })
  })(this)));
  return this
});
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.scala$xml$persistent$SetStorage$$theSet__ = (function() {
  return this.scala$xml$persistent$SetStorage$$theSet__Lscala_collection_mutable_HashSet()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_persistent_SetStorage = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_persistent_SetStorage.prototype = ScalaJS.c.scala_xml_persistent_SetStorage.prototype;
ScalaJS.is.scala_xml_persistent_SetStorage = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_persistent_SetStorage)))
});
ScalaJS.as.scala_xml_persistent_SetStorage = (function(obj) {
  if ((ScalaJS.is.scala_xml_persistent_SetStorage(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.persistent.SetStorage")
  }
});
ScalaJS.isArrayOf.scala_xml_persistent_SetStorage = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_persistent_SetStorage)))
});
ScalaJS.asArrayOf.scala_xml_persistent_SetStorage = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_persistent_SetStorage(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.persistent.SetStorage;", depth)
  }
});
ScalaJS.data.scala_xml_persistent_SetStorage = new ScalaJS.ClassTypeData({
  scala_xml_persistent_SetStorage: 0
}, false, "scala.xml.persistent.SetStorage", ScalaJS.data.scala_xml_persistent_CachedFileStorage, {
  scala_xml_persistent_SetStorage: 1,
  scala_xml_persistent_CachedFileStorage: 1,
  scala_util_logging_Logged: 1,
  java_lang_Thread: 1,
  java_lang_Runnable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_persistent_SetStorage.prototype.$classData = ScalaJS.data.scala_xml_persistent_SetStorage;
//@ sourceMappingURL=SetStorage.js.map
