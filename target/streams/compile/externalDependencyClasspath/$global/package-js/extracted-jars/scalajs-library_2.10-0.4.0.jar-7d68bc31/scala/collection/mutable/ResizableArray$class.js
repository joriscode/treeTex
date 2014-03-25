ScalaJS.impls.scala_collection_mutable_ResizableArray$class__companion__Lscala_collection_mutable_ResizableArray__Lscala_collection_generic_GenericCompanion = (function($$this) {
  return ScalaJS.modules.scala_collection_mutable_ResizableArray()
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__initialSize__Lscala_collection_mutable_ResizableArray__I = (function($$this) {
  return 16
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__length__Lscala_collection_mutable_ResizableArray__I = (function($$this) {
  return $$this.size0__I()
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__apply__Lscala_collection_mutable_ResizableArray__I__O = (function($$this, idx) {
  if ((idx >= $$this.size0__I())) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  };
  return $$this.array__AO().underlying[idx]
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__update__Lscala_collection_mutable_ResizableArray__I__O__V = (function($$this, idx, elem) {
  if ((idx >= $$this.size0__I())) {
    throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(idx)))
  };
  $$this.array__AO().underlying[idx] = elem
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__foreach__Lscala_collection_mutable_ResizableArray__Lscala_Function1__V = (function($$this, f) {
  var i = 0;
  var top = $$this.size__I();
  while ((i < top)) {
    f.apply__O__O($$this.array__AO().underlying[i]);
    i = (i + 1)
  }
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__copyToArray__Lscala_collection_mutable_ResizableArray__O__I__I__V = (function($$this, xs, start, len) {
  var len1 = ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(ScalaJS.modules.scala_runtime_RichInt().min$extension__I__I__I(ScalaJS.modules.scala_Predef().intWrapper__I__I(len), (ScalaJS.modules.scala_runtime_ScalaRunTime().array$undlength__O__I(xs) - start))), $$this.length__I());
  ScalaJS.modules.scala_Array().copy__O__I__O__I__I__V($$this.array__AO(), 0, xs, start, len1)
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__reduceToSize__Lscala_collection_mutable_ResizableArray__I__V = (function($$this, sz) {
  ScalaJS.modules.scala_Predef().require__Z__V((sz <= $$this.size0__I()));
  while (($$this.size0__I() > sz)) {
    $$this.size0$und$eq__I__V(($$this.size0__I() - 1));
    $$this.array__AO().underlying[$$this.size0__I()] = null
  }
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__ensureSize__Lscala_collection_mutable_ResizableArray__I__V = (function($$this, n) {
  if ((n > $$this.array__AO().underlying.length)) {
    var newsize = ($$this.array__AO().underlying.length * 2);
    while ((n > newsize)) {
      newsize = (newsize * 2)
    };
    var newar = ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [newsize]);
    ScalaJS.modules.scala_compat_Platform().arraycopy__O__I__O__I__I__V($$this.array__AO(), 0, newar, 0, $$this.size0__I());
    $$this.array$und$eq__AO__V(newar)
  }
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__swap__Lscala_collection_mutable_ResizableArray__I__I__V = (function($$this, a, b) {
  var h = $$this.array__AO().underlying[a];
  $$this.array__AO().underlying[a] = $$this.array__AO().underlying[b];
  $$this.array__AO().underlying[b] = h
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__copy__Lscala_collection_mutable_ResizableArray__I__I__I__V = (function($$this, m, n, len) {
  ScalaJS.modules.scala_compat_Platform().arraycopy__O__I__O__I__I__V($$this.array__AO(), m, $$this.array__AO(), n, len)
});
ScalaJS.impls.scala_collection_mutable_ResizableArray$class__$init$__Lscala_collection_mutable_ResizableArray__V = (function($$this) {
  $$this.array$und$eq__AO__V(ScalaJS.newArrayObject(ScalaJS.data.java_lang_Object.getArrayOf(), [ScalaJS.modules.scala_math_package().max__I__I__I($$this.initialSize__I(), 1)]));
  $$this.size0$und$eq__I__V(0)
});
//@ sourceMappingURL=ResizableArray$class.js.map
