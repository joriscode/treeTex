/** @constructor */
ScalaJS.c.scala_collection_mutable_ArrayStack$ = (function() {
  ScalaJS.c.scala_collection_generic_SeqFactory.call(this)
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype = new ScalaJS.inheritable.scala_collection_generic_SeqFactory();
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.constructor = ScalaJS.c.scala_collection_mutable_ArrayStack$;
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.canBuildFrom__Lscala_collection_generic_CanBuildFrom = (function() {
  return this.ReusableCBF__Lscala_collection_generic_GenTraversableFactory$GenericCanBuildFrom()
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.newBuilder__Lscala_collection_mutable_Builder = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayStack().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.empty__Lscala_collection_mutable_ArrayStack = (function() {
  return new ScalaJS.c.scala_collection_mutable_ArrayStack().init___()
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayStack = (function(elems, evidence$1) {
  var els = ScalaJS.asArrayOf.java_lang_Object(elems.reverseMap__Lscala_Function1__Lscala_collection_generic_CanBuildFrom__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x$1) {
      return x$1
    })
  })()), ScalaJS.modules.scala_collection_package().breakOut__Lscala_collection_generic_CanBuildFrom__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_Array().canBuildFrom__Lscala_reflect_ClassTag__Lscala_collection_generic_CanBuildFrom(ScalaJS.modules.scala_reflect_ClassTag().AnyRef__Lscala_reflect_ClassTag()))), 1);
  if ((els.underlying.length === 0)) {
    return new ScalaJS.c.scala_collection_mutable_ArrayStack().init___()
  } else {
    return new ScalaJS.c.scala_collection_mutable_ArrayStack().init___AO__I(els, els.underlying.length)
  }
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.growArray__AO__AO = (function(x) {
  var y = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.modules.scala_math_package().max__I__I__I((x.underlying.length * 2), 1)]);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(x, 0, y, 0, x.underlying.length);
  return y
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.clone__AO__AO = (function(x) {
  var y = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [x.underlying.length]);
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V(x, 0, y, 0, x.underlying.length);
  return y
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.readResolve__p5__O = (function() {
  return ScalaJS.modules.scala_collection_mutable_ArrayStack()
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.clone__AO__ = (function(x) {
  return this.clone__AO__AO(x)
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.growArray__AO__ = (function(x$2) {
  return this.growArray__AO__AO(x$2)
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__ = (function(elems, evidence$1) {
  return this.apply__Lscala_collection_Seq__Lscala_reflect_ClassTag__Lscala_collection_mutable_ArrayStack(elems, evidence$1)
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.canBuildFrom__ = (function() {
  return this.canBuildFrom__Lscala_collection_generic_CanBuildFrom()
});
/** @constructor */
ScalaJS.inheritable.scala_collection_mutable_ArrayStack$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_mutable_ArrayStack$.prototype = ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype;
ScalaJS.is.scala_collection_mutable_ArrayStack$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_mutable_ArrayStack$)))
});
ScalaJS.as.scala_collection_mutable_ArrayStack$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_mutable_ArrayStack$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.mutable.ArrayStack")
  }
});
ScalaJS.isArrayOf.scala_collection_mutable_ArrayStack$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_mutable_ArrayStack$)))
});
ScalaJS.asArrayOf.scala_collection_mutable_ArrayStack$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_mutable_ArrayStack$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.mutable.ArrayStack;", depth)
  }
});
ScalaJS.data.scala_collection_mutable_ArrayStack$ = new ScalaJS.ClassTypeData({
  scala_collection_mutable_ArrayStack$: 0
}, false, "scala.collection.mutable.ArrayStack$", ScalaJS.data.scala_collection_generic_SeqFactory, {
  scala_collection_mutable_ArrayStack$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_collection_generic_SeqFactory: 1,
  scala_collection_generic_TraversableFactory: 1,
  scala_collection_generic_GenericSeqCompanion: 1,
  scala_collection_generic_GenSeqFactory: 1,
  scala_collection_generic_GenTraversableFactory: 1,
  scala_collection_generic_GenericCompanion: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_mutable_ArrayStack$.prototype.$classData = ScalaJS.data.scala_collection_mutable_ArrayStack$;
ScalaJS.moduleInstances.scala_collection_mutable_ArrayStack = undefined;
ScalaJS.modules.scala_collection_mutable_ArrayStack = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_mutable_ArrayStack)) {
    ScalaJS.moduleInstances.scala_collection_mutable_ArrayStack = new ScalaJS.c.scala_collection_mutable_ArrayStack$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_mutable_ArrayStack
});
//@ sourceMappingURL=ArrayStack$.js.map
