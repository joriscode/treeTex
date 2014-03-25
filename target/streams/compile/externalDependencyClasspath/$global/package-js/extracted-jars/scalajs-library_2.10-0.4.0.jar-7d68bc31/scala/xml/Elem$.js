/** @constructor */
ScalaJS.c.scala_xml_Elem$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_Elem$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Elem$.prototype.constructor = ScalaJS.c.scala_xml_Elem$;
ScalaJS.c.scala_xml_Elem$.prototype.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem = (function(prefix, label, attributes, scope, child) {
  return this.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__Lscala_xml_Elem(prefix, label, attributes, scope, child.isEmpty__Z(), child)
});
ScalaJS.c.scala_xml_Elem$.prototype.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__Lscala_xml_Elem = (function(prefix, label, attributes, scope, minimizeEmpty, child) {
  return new ScalaJS.c.scala_xml_Elem().init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq(prefix, label, attributes, scope, minimizeEmpty, child)
});
ScalaJS.c.scala_xml_Elem$.prototype.unapplySeq__Lscala_xml_Node__Lscala_Option = (function(n) {
  var x1 = n;
  matchEnd8: {
    if (ScalaJS.is.scala_xml_SpecialNode(x1)) {
      var jsx$1 = true;
      break matchEnd8
    };
    if (ScalaJS.is.scala_xml_Group(x1)) {
      var jsx$1 = true;
      break matchEnd8
    };
    var jsx$1 = false;
    break matchEnd8
  };
  if (jsx$1) {
    return ScalaJS.modules.scala_None()
  };
  return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple5().init___O__O__O__O__O(n.prefix__T(), n.label__T(), n.attributes__Lscala_xml_MetaData(), n.scope__Lscala_xml_NamespaceBinding(), n.child__Lscala_collection_Seq()))
});
ScalaJS.c.scala_xml_Elem$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_xml_Elem()
});
ScalaJS.c.scala_xml_Elem$.prototype.unapplySeq__Lscala_xml_Node__ = (function(n) {
  return this.unapplySeq__Lscala_xml_Node__Lscala_Option(n)
});
ScalaJS.c.scala_xml_Elem$.prototype.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__ = (function(prefix, label, attributes, scope, minimizeEmpty, child) {
  return this.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_collection_Seq__Lscala_xml_Elem(prefix, label, attributes, scope, minimizeEmpty, child)
});
ScalaJS.c.scala_xml_Elem$.prototype.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__ = (function(prefix$2, label$2, attributes$2, scope$2, child$2) {
  return this.apply__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_collection_Seq__Lscala_xml_Elem(prefix$2, label$2, attributes$2, scope$2, child$2)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Elem$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Elem$.prototype = ScalaJS.c.scala_xml_Elem$.prototype;
ScalaJS.is.scala_xml_Elem$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Elem$)))
});
ScalaJS.as.scala_xml_Elem$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Elem$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Elem")
  }
});
ScalaJS.isArrayOf.scala_xml_Elem$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Elem$)))
});
ScalaJS.asArrayOf.scala_xml_Elem$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Elem$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Elem;", depth)
  }
});
ScalaJS.data.scala_xml_Elem$ = new ScalaJS.ClassTypeData({
  scala_xml_Elem$: 0
}, false, "scala.xml.Elem$", ScalaJS.data.java_lang_Object, {
  scala_xml_Elem$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Elem$.prototype.$classData = ScalaJS.data.scala_xml_Elem$;
ScalaJS.moduleInstances.scala_xml_Elem = undefined;
ScalaJS.modules.scala_xml_Elem = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Elem)) {
    ScalaJS.moduleInstances.scala_xml_Elem = new ScalaJS.c.scala_xml_Elem$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Elem
});
//@ sourceMappingURL=Elem$.js.map
