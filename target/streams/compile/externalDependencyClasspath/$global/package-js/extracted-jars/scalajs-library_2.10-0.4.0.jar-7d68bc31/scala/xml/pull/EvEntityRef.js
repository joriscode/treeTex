/** @constructor */
ScalaJS.c.scala_xml_pull_EvEntityRef = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.entity$1 = null
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.constructor = ScalaJS.c.scala_xml_pull_EvEntityRef;
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.entity__T = (function() {
  return this.entity$1
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.copy__T__Lscala_xml_pull_EvEntityRef = (function(entity) {
  return new ScalaJS.c.scala_xml_pull_EvEntityRef().init___T(entity)
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.copy$default$1__T = (function() {
  return this.entity__T()
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.productPrefix__T = (function() {
  return "EvEntityRef"
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.productArity__I = (function() {
  return 1
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.entity__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_pull_EvEntityRef(x$1)
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_pull_EvEntityRef(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var EvEntityRef$1 = ScalaJS.as.scala_xml_pull_EvEntityRef(x$1);
      return (ScalaJS.anyRefEqEq(this.entity__T(), EvEntityRef$1.entity__T()) && EvEntityRef$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.init___T = (function(entity) {
  this.entity$1 = entity;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.copy__T__ = (function(entity) {
  return this.copy__T__Lscala_xml_pull_EvEntityRef(entity)
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.entity__ = (function() {
  return this.entity__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvEntityRef = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvEntityRef.prototype = ScalaJS.c.scala_xml_pull_EvEntityRef.prototype;
ScalaJS.is.scala_xml_pull_EvEntityRef = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvEntityRef)))
});
ScalaJS.as.scala_xml_pull_EvEntityRef = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvEntityRef(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvEntityRef")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvEntityRef = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvEntityRef)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvEntityRef = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvEntityRef(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvEntityRef;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvEntityRef = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvEntityRef: 0
}, false, "scala.xml.pull.EvEntityRef", ScalaJS.data.java_lang_Object, {
  scala_xml_pull_EvEntityRef: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_pull_XMLEvent: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvEntityRef.prototype.$classData = ScalaJS.data.scala_xml_pull_EvEntityRef;
//@ sourceMappingURL=EvEntityRef.js.map
