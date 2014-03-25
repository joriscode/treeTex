/** @constructor */
ScalaJS.c.scala_scalajs_js_Dictionary$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_scalajs_js_Dictionary$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_scalajs_js_Dictionary$.prototype.constructor = ScalaJS.c.scala_scalajs_js_Dictionary$;
ScalaJS.c.scala_scalajs_js_Dictionary$.prototype.empty__Lscala_scalajs_js_Dictionary = (function() {
  return {}
});
ScalaJS.c.scala_scalajs_js_Dictionary$.prototype.apply__Lscala_collection_Seq__Lscala_scalajs_js_Dictionary = (function(properties) {
  var result = this.empty__Lscala_scalajs_js_Dictionary();
  properties.withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(check$ifrefutable$1) {
      var x1 = check$ifrefutable$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var jsx$1 = true;
          break matchEnd3
        };
        var jsx$1 = false;
        break matchEnd3
      };
      return ScalaJS.bZ(jsx$1)
    })
  })())).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(result$1) {
    return (function(x$1) {
      var x1 = x$1;
      matchEnd3: {
        if ((x1 !== null)) {
          var key = x1.$$und1__O();
          var value = x1.$$und2__O();
          result$1[key] = value;
          ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
          break matchEnd3
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      };
      return ScalaJS.bV(undefined)
    })
  })(result)));
  return result
});
ScalaJS.c.scala_scalajs_js_Dictionary$.prototype.propertiesOf__Lscala_scalajs_js_Any__ = (function(obj) {
  return this.propertiesOf__Lscala_scalajs_js_Any__Lscala_scalajs_js_Array(obj)
});
ScalaJS.c.scala_scalajs_js_Dictionary$.prototype.apply__Lscala_collection_Seq__ = (function(properties) {
  return this.apply__Lscala_collection_Seq__Lscala_scalajs_js_Dictionary(properties)
});
ScalaJS.c.scala_scalajs_js_Dictionary$.prototype.empty__ = (function() {
  return this.empty__Lscala_scalajs_js_Dictionary()
});
/** @constructor */
ScalaJS.inheritable.scala_scalajs_js_Dictionary$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_scalajs_js_Dictionary$.prototype = ScalaJS.c.scala_scalajs_js_Dictionary$.prototype;
ScalaJS.is.scala_scalajs_js_Dictionary$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_scalajs_js_Dictionary$)))
});
ScalaJS.as.scala_scalajs_js_Dictionary$ = (function(obj) {
  if ((ScalaJS.is.scala_scalajs_js_Dictionary$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.scalajs.js.Dictionary")
  }
});
ScalaJS.isArrayOf.scala_scalajs_js_Dictionary$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_scalajs_js_Dictionary$)))
});
ScalaJS.asArrayOf.scala_scalajs_js_Dictionary$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_scalajs_js_Dictionary$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.scalajs.js.Dictionary;", depth)
  }
});
ScalaJS.data.scala_scalajs_js_Dictionary$ = new ScalaJS.ClassTypeData({
  scala_scalajs_js_Dictionary$: 0
}, false, "scala.scalajs.js.Dictionary$", ScalaJS.data.java_lang_Object, {
  scala_scalajs_js_Dictionary$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_scalajs_js_Dictionary$.prototype.$classData = ScalaJS.data.scala_scalajs_js_Dictionary$;
ScalaJS.moduleInstances.scala_scalajs_js_Dictionary = undefined;
ScalaJS.modules.scala_scalajs_js_Dictionary = (function() {
  if ((!ScalaJS.moduleInstances.scala_scalajs_js_Dictionary)) {
    ScalaJS.moduleInstances.scala_scalajs_js_Dictionary = new ScalaJS.c.scala_scalajs_js_Dictionary$().init___()
  };
  return ScalaJS.moduleInstances.scala_scalajs_js_Dictionary
});
//@ sourceMappingURL=Dictionary$.js.map
