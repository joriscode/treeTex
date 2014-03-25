/** @constructor */
ScalaJS.c.scala_collection_immutable_StringOps$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.constructor = ScalaJS.c.scala_collection_immutable_StringOps$;
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.thisCollection$extension__T__Lscala_collection_immutable_WrappedString = (function($$this) {
  return new ScalaJS.c.scala_collection_immutable_WrappedString().init___T($$this)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.toCollection$extension__T__T__Lscala_collection_immutable_WrappedString = (function($$this, repr) {
  return new ScalaJS.c.scala_collection_immutable_WrappedString().init___T(repr)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.newBuilder$extension__T__Lscala_collection_mutable_StringBuilder = (function($$this) {
  return ScalaJS.modules.scala_collection_mutable_StringBuilder().newBuilder__Lscala_collection_mutable_StringBuilder()
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.apply$extension__T__I__C = (function($$this, index) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__charAt__Lscala_scalajs_runtime_RuntimeString__I__C($$this, index)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.slice$extension__T__I__I__T = (function($$this, from, until) {
  if ((from < 0)) {
    var start = 0
  } else {
    var start = from
  };
  if (((until <= start) || (start >= ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I($$this)))) {
    return ""
  };
  if ((until > this.length$extension__T__I($$this))) {
    var end = this.length$extension__T__I($$this)
  } else {
    var end = until
  };
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__substring__Lscala_scalajs_runtime_RuntimeString__I__I__T($$this, start, end)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.toString$extension__T__T = (function($$this) {
  return $$this
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.length$extension__T__I = (function($$this) {
  return ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__length__Lscala_scalajs_runtime_RuntimeString__I($$this)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.seq$extension__T__Lscala_collection_immutable_WrappedString = (function($$this) {
  return new ScalaJS.c.scala_collection_immutable_WrappedString().init___T($$this)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.hashCode$extension__T__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.equals$extension__T__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_collection_immutable_StringOps(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var StringOps$1 = null
    } else {
      var StringOps$1 = ScalaJS.as.scala_collection_immutable_StringOps(x$1).repr__T()
    };
    return ScalaJS.anyRefEqEq($$this, StringOps$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.equals$extension__T__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__T__O__Z($$this, x$1))
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.hashCode$extension__T__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__T__I($$this$2))
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.seq$extension__T__ = (function($$this$3) {
  return this.seq$extension__T__Lscala_collection_immutable_WrappedString($$this$3)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.length$extension__T__ = (function($$this$4) {
  return ScalaJS.bI(this.length$extension__T__I($$this$4))
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.toString$extension__T__ = (function($$this$5) {
  return this.toString$extension__T__T($$this$5)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.slice$extension__T__I__I__ = (function($$this$6, from, until) {
  return this.slice$extension__T__I__I__T($$this$6, from, until)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.apply$extension__T__I__ = (function($$this$7, index) {
  return ScalaJS.bC(this.apply$extension__T__I__C($$this$7, index))
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.newBuilder$extension__T__ = (function($$this$8) {
  return this.newBuilder$extension__T__Lscala_collection_mutable_StringBuilder($$this$8)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.toCollection$extension__T__T__ = (function($$this$9, repr) {
  return this.toCollection$extension__T__T__Lscala_collection_immutable_WrappedString($$this$9, repr)
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.thisCollection$extension__T__ = (function($$this$10) {
  return this.thisCollection$extension__T__Lscala_collection_immutable_WrappedString($$this$10)
});
/** @constructor */
ScalaJS.inheritable.scala_collection_immutable_StringOps$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_collection_immutable_StringOps$.prototype = ScalaJS.c.scala_collection_immutable_StringOps$.prototype;
ScalaJS.is.scala_collection_immutable_StringOps$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_collection_immutable_StringOps$)))
});
ScalaJS.as.scala_collection_immutable_StringOps$ = (function(obj) {
  if ((ScalaJS.is.scala_collection_immutable_StringOps$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.collection.immutable.StringOps")
  }
});
ScalaJS.isArrayOf.scala_collection_immutable_StringOps$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_collection_immutable_StringOps$)))
});
ScalaJS.asArrayOf.scala_collection_immutable_StringOps$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_collection_immutable_StringOps$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.collection.immutable.StringOps;", depth)
  }
});
ScalaJS.data.scala_collection_immutable_StringOps$ = new ScalaJS.ClassTypeData({
  scala_collection_immutable_StringOps$: 0
}, false, "scala.collection.immutable.StringOps$", ScalaJS.data.java_lang_Object, {
  scala_collection_immutable_StringOps$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_collection_immutable_StringOps$.prototype.$classData = ScalaJS.data.scala_collection_immutable_StringOps$;
ScalaJS.moduleInstances.scala_collection_immutable_StringOps = undefined;
ScalaJS.modules.scala_collection_immutable_StringOps = (function() {
  if ((!ScalaJS.moduleInstances.scala_collection_immutable_StringOps)) {
    ScalaJS.moduleInstances.scala_collection_immutable_StringOps = new ScalaJS.c.scala_collection_immutable_StringOps$().init___()
  };
  return ScalaJS.moduleInstances.scala_collection_immutable_StringOps
});
//@ sourceMappingURL=StringOps$.js.map
