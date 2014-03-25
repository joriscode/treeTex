/** @constructor */
ScalaJS.c.scala_xml_dtd_IMPLIED$ = (function() {
  ScalaJS.c.scala_xml_dtd_DefaultDecl.call(this)
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype = new ScalaJS.inheritable.scala_xml_dtd_DefaultDecl();
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.constructor = ScalaJS.c.scala_xml_dtd_IMPLIED$;
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.toString__T = (function() {
  return "#IMPLIED"
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb) {
  return sb.append__T__Lscala_collection_mutable_StringBuilder("#IMPLIED")
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.productPrefix__T = (function() {
  return "IMPLIED"
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_IMPLIED$(x$1)
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.hashCode__I = (function() {
  return -1651045240
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_IMPLIED()
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_dtd_DefaultDecl.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_dtd_IMPLIED = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_IMPLIED$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_IMPLIED$.prototype = ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype;
ScalaJS.is.scala_xml_dtd_IMPLIED$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_IMPLIED$)))
});
ScalaJS.as.scala_xml_dtd_IMPLIED$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_IMPLIED$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.IMPLIED")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_IMPLIED$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_IMPLIED$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_IMPLIED$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_IMPLIED$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.IMPLIED;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_IMPLIED$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_IMPLIED$: 0
}, false, "scala.xml.dtd.IMPLIED$", ScalaJS.data.scala_xml_dtd_DefaultDecl, {
  scala_xml_dtd_IMPLIED$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_DefaultDecl: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_IMPLIED$.prototype.$classData = ScalaJS.data.scala_xml_dtd_IMPLIED$;
ScalaJS.moduleInstances.scala_xml_dtd_IMPLIED = undefined;
ScalaJS.modules.scala_xml_dtd_IMPLIED = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_IMPLIED)) {
    ScalaJS.moduleInstances.scala_xml_dtd_IMPLIED = new ScalaJS.c.scala_xml_dtd_IMPLIED$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_IMPLIED
});
//@ sourceMappingURL=IMPLIED$.js.map
