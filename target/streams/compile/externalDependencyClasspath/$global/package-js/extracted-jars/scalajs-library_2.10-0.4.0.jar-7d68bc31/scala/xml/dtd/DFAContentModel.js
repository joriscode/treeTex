/** @constructor */
ScalaJS.c.scala_xml_dtd_DFAContentModel = (function() {
  ScalaJS.c.scala_xml_dtd_ContentModel.call(this);
  this.dfa$2 = null;
  this.bitmap$0$2 = false
});
ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype = new ScalaJS.inheritable.scala_xml_dtd_ContentModel();
ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype.constructor = ScalaJS.c.scala_xml_dtd_DFAContentModel;
ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype.dfa$lzycompute__p2__Lscala_util_automata_DetWordAutom = (function() {
  if ((!this.bitmap$0$2)) {
    var nfa = ScalaJS.modules.scala_xml_dtd_ContentModel$Translator().automatonFrom__Lscala_util_regexp_Base$RegExp__I__Lscala_util_automata_NondetWordAutom(this.r__Lscala_util_regexp_Base$RegExp(), 1);
    var jsx$1 = new ScalaJS.c.scala_util_automata_SubsetConstruction().init___Lscala_util_automata_NondetWordAutom(nfa).determinize__Lscala_util_automata_DetWordAutom();
    this.dfa$2 = jsx$1;
    this.bitmap$0$2 = true
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.dfa$2
});
ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype.dfa__Lscala_util_automata_DetWordAutom = (function() {
  if ((!this.bitmap$0$2)) {
    return this.dfa$lzycompute__p2__Lscala_util_automata_DetWordAutom()
  } else {
    return this.dfa$2
  }
});
ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype.dfa__ = (function() {
  return this.dfa__Lscala_util_automata_DetWordAutom()
});
ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype.r__ = (function() {
  return this.r__Lscala_util_regexp_Base$RegExp()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_dtd_DFAContentModel = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_dtd_DFAContentModel.prototype = ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype;
ScalaJS.is.scala_xml_dtd_DFAContentModel = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_dtd_DFAContentModel)))
});
ScalaJS.as.scala_xml_dtd_DFAContentModel = (function(obj) {
  if ((ScalaJS.is.scala_xml_dtd_DFAContentModel(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.dtd.DFAContentModel")
  }
});
ScalaJS.isArrayOf.scala_xml_dtd_DFAContentModel = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_dtd_DFAContentModel)))
});
ScalaJS.asArrayOf.scala_xml_dtd_DFAContentModel = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_dtd_DFAContentModel(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.dtd.DFAContentModel;", depth)
  }
});
ScalaJS.data.scala_xml_dtd_DFAContentModel = new ScalaJS.ClassTypeData({
  scala_xml_dtd_DFAContentModel: 0
}, false, "scala.xml.dtd.DFAContentModel", ScalaJS.data.scala_xml_dtd_ContentModel, {
  scala_xml_dtd_DFAContentModel: 1,
  scala_xml_dtd_ContentModel: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_dtd_DFAContentModel.prototype.$classData = ScalaJS.data.scala_xml_dtd_DFAContentModel;
//@ sourceMappingURL=DFAContentModel.js.map
