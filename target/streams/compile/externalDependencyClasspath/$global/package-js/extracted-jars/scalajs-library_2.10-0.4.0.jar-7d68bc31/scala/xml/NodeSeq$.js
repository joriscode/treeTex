/** @constructor */
ScalaJS.c.scala_xml_NodeSeq$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.Empty$1 = null
});
ScalaJS.c.scala_xml_NodeSeq$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_NodeSeq$.prototype.constructor = ScalaJS.c.scala_xml_NodeSeq$;
ScalaJS.c.scala_xml_NodeSeq$.prototype.Empty__Lscala_xml_NodeSeq = (function() {
  return this.Empty$1
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.fromSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq = (function(s) {
  return new ScalaJS.c.scala_xml_NodeSeq$$anon$1().init___Lscala_collection_Seq(s)
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return new ScalaJS.c.scala_xml_NodeSeq$$anon$2().init___()
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ListBuffer().init___().mapResult__Lscala_Function1__Lscala_collection_mutable_Builder(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(s) {
      return ScalaJS.modules.scala_xml_NodeSeq().fromSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(s)
    })
  })()))
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.seqToNodeSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq = (function(s) {
  return this.fromSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(s)
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_NodeSeq = this;
  this.Empty$1 = this.fromSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(ScalaJS.modules.scala_collection_immutable_Nil());
  return this
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.seqToNodeSeq__Lscala_collection_Seq__ = (function(s) {
  return this.seqToNodeSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(s)
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.newBuilder__ = (function() {
  return this.newBuilder__Lscala_collection_mutable_Builder()
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.fromSeq__Lscala_collection_Seq__ = (function(s$2) {
  return this.fromSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(s$2)
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.Empty__ = (function() {
  return this.Empty__Lscala_xml_NodeSeq()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_NodeSeq$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_NodeSeq$.prototype = ScalaJS.c.scala_xml_NodeSeq$.prototype;
ScalaJS.is.scala_xml_NodeSeq$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_NodeSeq$)))
});
ScalaJS.as.scala_xml_NodeSeq$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_NodeSeq$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.NodeSeq")
  }
});
ScalaJS.isArrayOf.scala_xml_NodeSeq$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_NodeSeq$)))
});
ScalaJS.asArrayOf.scala_xml_NodeSeq$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_NodeSeq$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.NodeSeq;", depth)
  }
});
ScalaJS.data.scala_xml_NodeSeq$ = new ScalaJS.ClassTypeData({
  scala_xml_NodeSeq$: 0
}, false, "scala.xml.NodeSeq$", ScalaJS.data.java_lang_Object, {
  scala_xml_NodeSeq$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_NodeSeq$.prototype.$classData = ScalaJS.data.scala_xml_NodeSeq$;
ScalaJS.moduleInstances.scala_xml_NodeSeq = undefined;
ScalaJS.modules.scala_xml_NodeSeq = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_NodeSeq)) {
    ScalaJS.moduleInstances.scala_xml_NodeSeq = new ScalaJS.c.scala_xml_NodeSeq$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_NodeSeq
});
//@ sourceMappingURL=NodeSeq$.js.map
