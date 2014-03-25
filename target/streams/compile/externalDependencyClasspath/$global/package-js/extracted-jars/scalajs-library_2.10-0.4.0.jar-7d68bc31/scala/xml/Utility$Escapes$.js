/** @constructor */
ScalaJS.c.scala_xml_Utility$Escapes$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.pairs$1 = null;
  this.escMap$1 = null;
  this.unescMap$1 = null
});
ScalaJS.c.scala_xml_Utility$Escapes$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.constructor = ScalaJS.c.scala_xml_Utility$Escapes$;
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.pairs__Lscala_collection_immutable_Map = (function() {
  return this.pairs$1
});
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.escMap__Lscala_collection_immutable_Map = (function() {
  return this.escMap$1
});
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.unescMap__Lscala_collection_immutable_Map = (function() {
  return this.unescMap$1
});
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_Utility$Escapes = this;
  this.pairs$1 = ScalaJS.as.scala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("lt"), ScalaJS.bC(60)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("gt"), ScalaJS.bC(62)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("amp"), ScalaJS.bC(38)), ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("quot"), ScalaJS.bC(34))]), 1))));
  this.escMap$1 = ScalaJS.as.scala_collection_immutable_Map(this.pairs__Lscala_collection_immutable_Map().map__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x0$1) {
      var x1 = x0$1;
      if ((x1 !== null)) {
        var s = ScalaJS.as.java_lang_String(x1.$$und1__O());
        var c = x1.$$und2$mcC$sp__C();
        return ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O(ScalaJS.bC(c)), new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("&%s;")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [s]))))
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    })
  })()), ScalaJS.modules.scala_collection_immutable_Map().canBuildFrom__Lscala_collection_generic_CanBuildFrom()));
  this.unescMap$1 = this.pairs__Lscala_collection_immutable_Map().$$plus$plus__Lscala_collection_GenTraversableOnce__Lscala_collection_immutable_Map(ScalaJS.modules.scala_Predef().Map__Lscala_collection_immutable_Map$().apply__Lscala_collection_Seq__Lscala_collection_GenMap(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.scala_Tuple2.getArrayOf(), [ScalaJS.modules.scala_Predef$ArrowAssoc().$$minus$greater$extension__O__O__Lscala_Tuple2(ScalaJS.modules.scala_Predef().any2ArrowAssoc__O__O("apos"), ScalaJS.bC(39))]), 1))));
  return this
});
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.unescMap__ = (function() {
  return this.unescMap__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.escMap__ = (function() {
  return this.escMap__Lscala_collection_immutable_Map()
});
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.pairs__ = (function() {
  return this.pairs__Lscala_collection_immutable_Map()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Utility$Escapes$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Utility$Escapes$.prototype = ScalaJS.c.scala_xml_Utility$Escapes$.prototype;
ScalaJS.is.scala_xml_Utility$Escapes$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Utility$Escapes$)))
});
ScalaJS.as.scala_xml_Utility$Escapes$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Utility$Escapes$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Utility$Escapes")
  }
});
ScalaJS.isArrayOf.scala_xml_Utility$Escapes$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Utility$Escapes$)))
});
ScalaJS.asArrayOf.scala_xml_Utility$Escapes$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Utility$Escapes$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Utility$Escapes;", depth)
  }
});
ScalaJS.data.scala_xml_Utility$Escapes$ = new ScalaJS.ClassTypeData({
  scala_xml_Utility$Escapes$: 0
}, false, "scala.xml.Utility$Escapes$", ScalaJS.data.java_lang_Object, {
  scala_xml_Utility$Escapes$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Utility$Escapes$.prototype.$classData = ScalaJS.data.scala_xml_Utility$Escapes$;
ScalaJS.moduleInstances.scala_xml_Utility$Escapes = undefined;
ScalaJS.modules.scala_xml_Utility$Escapes = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Utility$Escapes)) {
    ScalaJS.moduleInstances.scala_xml_Utility$Escapes = new ScalaJS.c.scala_xml_Utility$Escapes$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Utility$Escapes
});
//@ sourceMappingURL=Utility$Escapes$.js.map
