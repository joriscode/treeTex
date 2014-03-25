/** @constructor */
ScalaJS.c.scala_Enumeration = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.scala$Enumeration$$vmap$1 = null;
  this.vset$1 = null;
  this.scala$Enumeration$$vsetDefined$1 = false;
  this.scala$Enumeration$$nmap$1 = null;
  this.nextId$1 = 0;
  this.nextName$1 = null;
  this.scala$Enumeration$$topId$1 = 0;
  this.scala$Enumeration$$bottomId$1 = 0;
  this.ValueOrdering$module$1 = null;
  this.ValueSet$module$1 = null
});
ScalaJS.c.scala_Enumeration.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_Enumeration.prototype.constructor = ScalaJS.c.scala_Enumeration;
ScalaJS.c.scala_Enumeration.prototype.ValueOrdering$lzycompute__p1__Lscala_Enumeration$ValueOrdering$ = (function() {
  if ((this.ValueOrdering$module$1 === null)) {
    this.ValueOrdering$module$1 = new ScalaJS.c.scala_Enumeration$ValueOrdering$().init___Lscala_Enumeration(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.ValueOrdering$module$1
});
ScalaJS.c.scala_Enumeration.prototype.ValueSet$lzycompute__p1__Lscala_Enumeration$ValueSet$ = (function() {
  if ((this.ValueSet$module$1 === null)) {
    this.ValueSet$module$1 = new ScalaJS.c.scala_Enumeration$ValueSet$().init___Lscala_Enumeration(this)
  };
  ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
  return this.ValueSet$module$1
});
ScalaJS.c.scala_Enumeration.prototype.readResolve__O = (function() {
  return ScalaJS.objectGetClass(this).getField__T__Ljava_lang_reflect_Field(ScalaJS.modules.scala_reflect_NameTransformer().MODULE$undINSTANCE$undNAME__T()).get__O__O(null)
});
ScalaJS.c.scala_Enumeration.prototype.toString__T = (function() {
  return ScalaJS.as.java_lang_String(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.impls.scala_scalajs_runtime_RuntimeString$class__split__Lscala_scalajs_runtime_RuntimeString__T__AT(ScalaJS.as.java_lang_String(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(ScalaJS.objectGetClass(this).getName__T())).stripSuffix__T__T("$"))).split__C__AT(46), 1)).last__O()), ScalaJS.modules.java_util_regex_Pattern().quote__T__T("$")), 1)).last__O())
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$vmap__Lscala_collection_mutable_Map = (function() {
  return this.scala$Enumeration$$vmap$1
});
ScalaJS.c.scala_Enumeration.prototype.vset__p1__Lscala_Enumeration$ValueSet = (function() {
  return this.vset$1
});
ScalaJS.c.scala_Enumeration.prototype.vset$und$eq__p1__Lscala_Enumeration$ValueSet__V = (function(x$1) {
  this.vset$1 = x$1
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$vsetDefined__p1__Z = (function() {
  return this.scala$Enumeration$$vsetDefined$1
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$vsetDefined$und$eq__Z__V = (function(x$1) {
  this.scala$Enumeration$$vsetDefined$1 = x$1
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$nmap__Lscala_collection_mutable_Map = (function() {
  return this.scala$Enumeration$$nmap$1
});
ScalaJS.c.scala_Enumeration.prototype.values__Lscala_Enumeration$ValueSet = (function() {
  if ((!this.scala$Enumeration$$vsetDefined__p1__Z())) {
    this.vset$und$eq__p1__Lscala_Enumeration$ValueSet__V(ScalaJS.as.scala_Enumeration$ValueSet(ScalaJS.as.scala_collection_mutable_Builder(this.ValueSet__Lscala_Enumeration$ValueSet$().newBuilder__Lscala_collection_mutable_Builder().$$plus$plus$eq__Lscala_collection_TraversableOnce__Lscala_collection_generic_Growable(this.scala$Enumeration$$vmap__Lscala_collection_mutable_Map().values__Lscala_collection_Iterable())).result__O()));
    this.scala$Enumeration$$vsetDefined$und$eq__Z__V(true)
  };
  return this.vset__p1__Lscala_Enumeration$ValueSet()
});
ScalaJS.c.scala_Enumeration.prototype.nextId__I = (function() {
  return this.nextId$1
});
ScalaJS.c.scala_Enumeration.prototype.nextId$und$eq__I__V = (function(x$1) {
  this.nextId$1 = x$1
});
ScalaJS.c.scala_Enumeration.prototype.nextName__Lscala_collection_Iterator = (function() {
  return this.nextName$1
});
ScalaJS.c.scala_Enumeration.prototype.nextName$und$eq__Lscala_collection_Iterator__V = (function(x$1) {
  this.nextName$1 = x$1
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$nextNameOrNull__T = (function() {
  if (((!ScalaJS.anyRefEqEq(this.nextName__Lscala_collection_Iterator(), null)) && this.nextName__Lscala_collection_Iterator().hasNext__Z())) {
    return ScalaJS.as.java_lang_String(this.nextName__Lscala_collection_Iterator().next__O())
  } else {
    return null
  }
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$topId__I = (function() {
  return this.scala$Enumeration$$topId$1
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$topId$und$eq__I__V = (function(x$1) {
  this.scala$Enumeration$$topId$1 = x$1
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$bottomId__I = (function() {
  return this.scala$Enumeration$$bottomId$1
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$bottomId$und$eq__I__V = (function(x$1) {
  this.scala$Enumeration$$bottomId$1 = x$1
});
ScalaJS.c.scala_Enumeration.prototype.maxId__I = (function() {
  return this.scala$Enumeration$$topId__I()
});
ScalaJS.c.scala_Enumeration.prototype.apply__I__Lscala_Enumeration$Value = (function(x) {
  return ScalaJS.as.scala_Enumeration$Value(this.scala$Enumeration$$vmap__Lscala_collection_mutable_Map().apply__O__O(ScalaJS.bI(x)))
});
ScalaJS.c.scala_Enumeration.prototype.withName__T__Lscala_Enumeration$Value = (function(s) {
  return ScalaJS.as.scala_Enumeration$Value(this.values__Lscala_Enumeration$ValueSet().find__Lscala_Function1__Lscala_Option(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(s$1) {
    return (function(x$1) {
      return ScalaJS.bZ(ScalaJS.anyRefEqEq(ScalaJS.objectToString(x$1), s$1))
    })
  })(s))).get__O())
});
ScalaJS.c.scala_Enumeration.prototype.Value__Lscala_Enumeration$Value = (function() {
  return this.Value__I__Lscala_Enumeration$Value(this.nextId__I())
});
ScalaJS.c.scala_Enumeration.prototype.Value__I__Lscala_Enumeration$Value = (function(i) {
  return this.Value__I__T__Lscala_Enumeration$Value(i, this.scala$Enumeration$$nextNameOrNull__T())
});
ScalaJS.c.scala_Enumeration.prototype.Value__T__Lscala_Enumeration$Value = (function(name) {
  return this.Value__I__T__Lscala_Enumeration$Value(this.nextId__I(), name)
});
ScalaJS.c.scala_Enumeration.prototype.Value__I__T__Lscala_Enumeration$Value = (function(i, name) {
  return new ScalaJS.c.scala_Enumeration$Val().init___Lscala_Enumeration__I__T(this, i, name)
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$populateNameMap__V = (function() {
  var fields = ScalaJS.objectGetClass(this).getDeclaredFields__ALjava_lang_reflect_Field();
  var methods = ScalaJS.asArrayOf.java_lang_reflect_Method(ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.objectGetClass(this).getMethods__ALjava_lang_reflect_Method(), 1)).filter__Lscala_Function1__O(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer, fields$1) {
    return (function(m) {
      return ScalaJS.bZ((((ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(m.getParameterTypes__ALjava_lang_Class(), 1)).isEmpty__Z() && ScalaJS.data.scala_Enumeration$Value.getClassOf().isAssignableFrom__Ljava_lang_Class__Z(m.getReturnType__Ljava_lang_Class())) && (!ScalaJS.anyRefEqEq(m.getDeclaringClass__Ljava_lang_Class(), ScalaJS.data.scala_Enumeration.getClassOf()))) && arg$outer.scala$Enumeration$$isValDef$1__Ljava_lang_reflect_Method__ALjava_lang_reflect_Field__Z(m, fields$1)))
    })
  })(this, fields))), 1);
  ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(methods, 1)).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
    return (function(m) {
      var name = m.getName__T();
      var value = ScalaJS.as.scala_Enumeration$Value(m.invoke__O__AO__O(arg$outer, ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [])));
      if ((value.scala$Enumeration$$outerEnum__Lscala_Enumeration() === arg$outer)) {
        var id = ScalaJS.uI(ScalaJS.data.scala_Enumeration$Val.getClassOf().getMethod__T__ALjava_lang_Class__Ljava_lang_reflect_Method("id", ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Class.getArrayOf(), [])).invoke__O__AO__O(value, ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [])));
        return arg$outer.scala$Enumeration$$nmap__Lscala_collection_mutable_Map().$$plus$eq__Lscala_Tuple2__Lscala_collection_mutable_MapLike(new ScalaJS.c.scala_Tuple2().init___O__O(ScalaJS.bI(id), name))
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(this)))
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$nameOf__I__T = (function(i) {
  return ScalaJS.as.java_lang_String(this.scala$Enumeration$$nmap__Lscala_collection_mutable_Map().getOrElse__O__Lscala_Function0__O(ScalaJS.bI(i), new ScalaJS.c.scala_scalajs_runtime_AnonFunction0().init___Lscala_scalajs_js_Function0((function(arg$outer, i$1) {
    return (function() {
      arg$outer.scala$Enumeration$$populateNameMap__V();
      return ScalaJS.as.java_lang_String(arg$outer.scala$Enumeration$$nmap__Lscala_collection_mutable_Map().apply__O__O(ScalaJS.bI(i$1)))
    })
  })(this, i))))
});
ScalaJS.c.scala_Enumeration.prototype.ValueOrdering__Lscala_Enumeration$ValueOrdering$ = (function() {
  if ((this.ValueOrdering$module$1 === null)) {
    return this.ValueOrdering$lzycompute__p1__Lscala_Enumeration$ValueOrdering$()
  } else {
    return this.ValueOrdering$module$1
  }
});
ScalaJS.c.scala_Enumeration.prototype.ValueSet__Lscala_Enumeration$ValueSet$ = (function() {
  if ((this.ValueSet$module$1 === null)) {
    return this.ValueSet$lzycompute__p1__Lscala_Enumeration$ValueSet$()
  } else {
    return this.ValueSet$module$1
  }
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$isValDef$1__Ljava_lang_reflect_Method__ALjava_lang_reflect_Field__Z = (function(m, fields$1) {
  return ScalaJS.modules.scala_Predef().refArrayOps__AO__Lscala_collection_mutable_ArrayOps(ScalaJS.asArrayOf.java_lang_Object(fields$1, 1)).exists__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(m$1) {
    return (function(fd) {
      return ScalaJS.bZ((ScalaJS.anyRefEqEq(fd.getName__T(), m$1.getName__T()) && ScalaJS.anyRefEqEq(fd.getType__Ljava_lang_Class(), m$1.getReturnType__Ljava_lang_Class())))
    })
  })(m)))
});
ScalaJS.c.scala_Enumeration.prototype.init___I = (function(initial) {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  this.scala$Enumeration$$vmap$1 = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
  this.vset$1 = null;
  this.scala$Enumeration$$vsetDefined$1 = false;
  this.scala$Enumeration$$nmap$1 = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
  this.nextId$1 = initial;
  this.scala$Enumeration$$topId$1 = initial;
  if ((initial < 0)) {
    var jsx$1 = initial
  } else {
    var jsx$1 = 0
  };
  this.scala$Enumeration$$bottomId$1 = jsx$1;
  return this
});
ScalaJS.c.scala_Enumeration.prototype.init___ = (function() {
  ScalaJS.c.scala_Enumeration.prototype.init___I.call(this, 0);
  return this
});
ScalaJS.c.scala_Enumeration.prototype.init___I__Lscala_collection_Seq = (function(initial, names) {
  ScalaJS.c.scala_Enumeration.prototype.init___I.call(this, initial);
  this.nextName$und$eq__Lscala_collection_Iterator__V(names.iterator__Lscala_collection_Iterator());
  return this
});
ScalaJS.c.scala_Enumeration.prototype.init___Lscala_collection_Seq = (function(names) {
  ScalaJS.c.scala_Enumeration.prototype.init___I__Lscala_collection_Seq.call(this, 0, names);
  return this
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$isValDef$1__Ljava_lang_reflect_Method__ALjava_lang_reflect_Field__ = (function(m, fields$1) {
  return ScalaJS.bZ(this.scala$Enumeration$$isValDef$1__Ljava_lang_reflect_Method__ALjava_lang_reflect_Field__Z(m, fields$1))
});
ScalaJS.c.scala_Enumeration.prototype.ValueSet__ = (function() {
  return this.ValueSet__Lscala_Enumeration$ValueSet$()
});
ScalaJS.c.scala_Enumeration.prototype.ValueOrdering__ = (function() {
  return this.ValueOrdering__Lscala_Enumeration$ValueOrdering$()
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$nameOf__I__ = (function(i) {
  return this.scala$Enumeration$$nameOf__I__T(i)
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$populateNameMap__ = (function() {
  return ScalaJS.bV(this.scala$Enumeration$$populateNameMap__V())
});
ScalaJS.c.scala_Enumeration.prototype.Value__I__T__ = (function(i$2, name) {
  return this.Value__I__T__Lscala_Enumeration$Value(i$2, name)
});
ScalaJS.c.scala_Enumeration.prototype.Value__T__ = (function(name$2) {
  return this.Value__T__Lscala_Enumeration$Value(name$2)
});
ScalaJS.c.scala_Enumeration.prototype.Value__I__ = (function(i$3) {
  return this.Value__I__Lscala_Enumeration$Value(i$3)
});
ScalaJS.c.scala_Enumeration.prototype.Value__ = (function() {
  return this.Value__Lscala_Enumeration$Value()
});
ScalaJS.c.scala_Enumeration.prototype.withName__T__ = (function(s) {
  return this.withName__T__Lscala_Enumeration$Value(s)
});
ScalaJS.c.scala_Enumeration.prototype.apply__I__ = (function(x) {
  return this.apply__I__Lscala_Enumeration$Value(x)
});
ScalaJS.c.scala_Enumeration.prototype.maxId__ = (function() {
  return ScalaJS.bI(this.maxId__I())
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$bottomId$und$eq__I__ = (function(x$1) {
  return ScalaJS.bV(this.scala$Enumeration$$bottomId$und$eq__I__V(x$1))
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$bottomId__ = (function() {
  return ScalaJS.bI(this.scala$Enumeration$$bottomId__I())
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$topId$und$eq__I__ = (function(x$1$2) {
  return ScalaJS.bV(this.scala$Enumeration$$topId$und$eq__I__V(x$1$2))
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$topId__ = (function() {
  return ScalaJS.bI(this.scala$Enumeration$$topId__I())
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$nextNameOrNull__ = (function() {
  return this.scala$Enumeration$$nextNameOrNull__T()
});
ScalaJS.c.scala_Enumeration.prototype.nextName$und$eq__Lscala_collection_Iterator__ = (function(x$1$3) {
  return ScalaJS.bV(this.nextName$und$eq__Lscala_collection_Iterator__V(x$1$3))
});
ScalaJS.c.scala_Enumeration.prototype.nextName__ = (function() {
  return this.nextName__Lscala_collection_Iterator()
});
ScalaJS.c.scala_Enumeration.prototype.nextId$und$eq__I__ = (function(x$1$4) {
  return ScalaJS.bV(this.nextId$und$eq__I__V(x$1$4))
});
ScalaJS.c.scala_Enumeration.prototype.nextId__ = (function() {
  return ScalaJS.bI(this.nextId__I())
});
ScalaJS.c.scala_Enumeration.prototype.values__ = (function() {
  return this.values__Lscala_Enumeration$ValueSet()
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$nmap__ = (function() {
  return this.scala$Enumeration$$nmap__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$vsetDefined$und$eq__Z__ = (function(x$1$5) {
  return ScalaJS.bV(this.scala$Enumeration$$vsetDefined$und$eq__Z__V(x$1$5))
});
ScalaJS.c.scala_Enumeration.prototype.scala$Enumeration$$vmap__ = (function() {
  return this.scala$Enumeration$$vmap__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_Enumeration.prototype.readResolve__ = (function() {
  return this.readResolve__O()
});
/** @constructor */
ScalaJS.inheritable.scala_Enumeration = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_Enumeration.prototype = ScalaJS.c.scala_Enumeration.prototype;
ScalaJS.is.scala_Enumeration = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_Enumeration)))
});
ScalaJS.as.scala_Enumeration = (function(obj) {
  if ((ScalaJS.is.scala_Enumeration(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.Enumeration")
  }
});
ScalaJS.isArrayOf.scala_Enumeration = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_Enumeration)))
});
ScalaJS.asArrayOf.scala_Enumeration = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_Enumeration(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.Enumeration;", depth)
  }
});
ScalaJS.data.scala_Enumeration = new ScalaJS.ClassTypeData({
  scala_Enumeration: 0
}, false, "scala.Enumeration", ScalaJS.data.java_lang_Object, {
  scala_Enumeration: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_Enumeration.prototype.$classData = ScalaJS.data.scala_Enumeration;
//@ sourceMappingURL=Enumeration.js.map
