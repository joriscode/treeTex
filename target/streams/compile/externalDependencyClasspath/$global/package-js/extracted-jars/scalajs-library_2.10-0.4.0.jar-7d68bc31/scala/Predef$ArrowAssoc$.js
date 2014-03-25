/** @constructor */
ScalaJS.c.scala_Predef$ArrowAssoc$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.constructor = ScalaJS.c.scala_Predef$ArrowAssoc$;
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.x$extension__O__O = (function($$this) {
  return $$this
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.$$minus$greater$extension__O__O__Lscala_Tuple2 = (function($$this, y) {
  return new ScalaJS.c.scala_Tuple2().init___O__O($$this, y)
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.$$u2192$extension__O__O__Lscala_Tuple2 = (function($$this, y) {
  return this.$$minus$greater$extension__O__O__Lscala_Tuple2($$this, y)
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.hashCode$extension__O__I = (function($$this) {
  return ScalaJS.objectHashCode($$this)
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.equals$extension__O__O__Z = (function($$this, x$1) {
  var x1 = x$1;
  matchEnd4: {
    if (ScalaJS.is.scala_Predef$ArrowAssoc(x1)) {
      var jsx$1 = true;
      break matchEnd4
    };
    var jsx$1 = false;
    break matchEnd4
  };
  if (jsx$1) {
    if ((x$1 === null)) {
      var ArrowAssoc$1 = null
    } else {
      var ArrowAssoc$1 = ScalaJS.as.scala_Predef$ArrowAssoc(x$1).$$und$undleftOfArrow__O()
    };
    return ScalaJS.anyEqEq($$this, ArrowAssoc$1)
  } else {
    return false
  }
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.equals$extension__O__O__ = (function($$this, x$1) {
  return ScalaJS.bZ(this.equals$extension__O__O__Z($$this, x$1))
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.hashCode$extension__O__ = (function($$this$2) {
  return ScalaJS.bI(this.hashCode$extension__O__I($$this$2))
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.$$u2192$extension__O__O__ = (function($$this$3, y) {
  return this.$$u2192$extension__O__O__Lscala_Tuple2($$this$3, y)
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.$$minus$greater$extension__O__O__ = (function($$this$4, y$2) {
  return this.$$minus$greater$extension__O__O__Lscala_Tuple2($$this$4, y$2)
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.x$extension__O__ = (function($$this$5) {
  return this.x$extension__O__O($$this$5)
});
/** @constructor */
ScalaJS.inheritable.scala_Predef$ArrowAssoc$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Predef$ArrowAssoc$.prototype = ScalaJS.c.scala_Predef$ArrowAssoc$.prototype;
ScalaJS.is.scala_Predef$ArrowAssoc$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Predef$ArrowAssoc$)))
});
ScalaJS.as.scala_Predef$ArrowAssoc$ = (function(obj) {
  if ((ScalaJS.is.scala_Predef$ArrowAssoc$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Predef$ArrowAssoc")
  }
});
ScalaJS.isArrayOf.scala_Predef$ArrowAssoc$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Predef$ArrowAssoc$)))
});
ScalaJS.asArrayOf.scala_Predef$ArrowAssoc$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Predef$ArrowAssoc$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Predef$ArrowAssoc;", depth)
  }
});
ScalaJS.data.scala_Predef$ArrowAssoc$ = new ScalaJS.ClassTypeData({
  scala_Predef$ArrowAssoc$: 0
}, false, "scala.Predef$ArrowAssoc$", ScalaJS.data.java_lang_Object, {
  scala_Predef$ArrowAssoc$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Predef$ArrowAssoc$.prototype.$classData = ScalaJS.data.scala_Predef$ArrowAssoc$;
ScalaJS.moduleInstances.scala_Predef$ArrowAssoc = undefined;
ScalaJS.modules.scala_Predef$ArrowAssoc = (function() {
  if ((!ScalaJS.moduleInstances.scala_Predef$ArrowAssoc)) {
    ScalaJS.moduleInstances.scala_Predef$ArrowAssoc = new ScalaJS.c.scala_Predef$ArrowAssoc$().init___()
  };
  return ScalaJS.moduleInstances.scala_Predef$ArrowAssoc
});
//@ sourceMappingURL=Predef$ArrowAssoc$.js.map
