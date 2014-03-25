/** @constructor */
ScalaJS.c.scala_xml_dtd_PCDATA$ = (function() {
  ScalaJS.c.scala_xml_dtd_ContentModel.call(this)
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype = new ScalaJS.inheritable.scala_xml_dtd_ContentModel();
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.constructor = ScalaJS.c.scala_xml_dtd_PCDATA$;
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(sb$2) {
  return sb$2.append__T__Lscala_collection_mutable_StringBuilder("(#PCDATA)")
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.productPrefix__T = (function() {
  return "PCDATA"
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.productArity__I = (function() {
  return 0
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)))
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_dtd_PCDATA$(x$1)
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.hashCode__I = (function() {
  return -1940668387
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.readResolve__p2__O = (function() {
  return ScalaJS.modules.scala_xml_dtd_PCDATA()
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_dtd_ContentModel.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_dtd_PCDATA = this;
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_PCDATA$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_PCDATA$.prototype = ScalaJS.c.scala_xml_dtd_PCDATA$.prototype;
ScalaJS.is.scala_xml_dtd_PCDATA$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_PCDATA$)))
});
ScalaJS.as.scala_xml_dtd_PCDATA$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_PCDATA$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.PCDATA")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_PCDATA$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_PCDATA$)))
});
ScalaJS.asArrayOf.scala_xml_dtd_PCDATA$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_PCDATA$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.PCDATA;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_PCDATA$ = new ScalaJS.ClassTypeData({
  scala_xml_dtd_PCDATA$: 0
}, false, "scala.xml.dtd.PCDATA$", ScalaJS.data.scala_xml_dtd_ContentModel, {
  scala_xml_dtd_PCDATA$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_dtd_ContentModel: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_PCDATA$.prototype.$classData = ScalaJS.data.scala_xml_dtd_PCDATA$;
ScalaJS.moduleInstances.scala_xml_dtd_PCDATA = undefined;
ScalaJS.modules.scala_xml_dtd_PCDATA = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_dtd_PCDATA)) {
    ScalaJS.moduleInstances.scala_xml_dtd_PCDATA = new ScalaJS.c.scala_xml_dtd_PCDATA$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_dtd_PCDATA
});
//@ sourceMappingURL=PCDATA$.js.map
