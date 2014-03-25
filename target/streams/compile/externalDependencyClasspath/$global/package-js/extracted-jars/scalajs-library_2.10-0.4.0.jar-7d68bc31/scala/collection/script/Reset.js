/** @constructor */
ScalaJS.c.scala_collection_script_Reset = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_script_Reset.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_script_Reset.prototype.constructor = ScalaJS.c.scala_collection_script_Reset;
ScalaJS.c.scala_collection_script_Reset.prototype.copy__Lscala_collection_script_Reset = (function() {
  return new ScalaJS.c.scala_collection_script_Reset().init___()
});
ScalaJS.c.scala_collection_script_Reset.prototype.productPrefix__T = (function() {
  return "Reset"
});
ScalaJS.c.scala_collection_script_Reset.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_collection_script_Reset.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_collection_script_Reset.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_collection_script_Reset.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_collection_script_Reset(x$1)
});
ScalaJS.c.scala_collection_script_Reset.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_collection_script_Reset.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_collection_script_Reset.prototype.equals__O__Z = (function(x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_script_Reset(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    return ScalaJS.as.scala_collection_script_Reset(x$1).canEqual__O__Z(this)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_script_Reset.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_collection_script_Reset.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_collection_script_Reset.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_collection_script_Reset.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_collection_script_Reset.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_collection_script_Reset.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_collection_script_Reset.prototype.copy__ = (function() {
  return this.copy__Lscala_collection_script_Reset()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_script_Reset = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_script_Reset.prototype = ScalaJS.c.scala_collection_script_Reset.prototype;
ScalaJS.is.scala_collection_script_Reset = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_script_Reset)))
});
ScalaJS.as.scala_collection_script_Reset = (function(obj) {
  if ((ScalaJS.is.scala_collection_script_Reset(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.script.Reset")
  }
});
ScalaJS.isArrayOf.scala_collection_script_Reset = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_script_Reset)))
});
ScalaJS.asArrayOf.scala_collection_script_Reset = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_script_Reset(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.script.Reset;", depth)
  }
});
ScalaJS.data.scala_collection_script_Reset = new ScalaJS.ClassTypeData({
  scala_collection_script_Reset: 0
}, false, "scala.collection.script.Reset", ScalaJS.data.java_lang_Object, {
  scala_collection_script_Reset: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_collection_script_Message: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_script_Reset.prototype.$classData = ScalaJS.data.scala_collection_script_Reset;
//@ sourceMappingURL=Reset.js.map
